const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fetchuser = require('../middleware/fetchUser');

const JWT_SECRET = process.env.JWT_SECRET;

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('email','Enter a valid email').isEmail(),
    body('name','Enter a valid name').isLength({min:3}),
    body('password','Password must be atleast 5 characters').isLength({min:5}),
],async (req,res)=>{
    let success = false
    // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }

    try
    {
        // password hashing
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password,salt);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
            });

        // web authentication token
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success = true
        res.json({success , authtoken});
    }
    catch(error)
    {
        // check if user with this email already exists
        if (error.code === 11000){
            return res.status(400).json({error:'Sorry a user with this email already exists'});
        }
        // for server error
        console.error(error);
        res.status(500).json({error:'Server Error'});
    }
});


// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login',[
    body('email','Enter a valid email').isEmail(),
    body('password','Password cannot be blank').exists(),
],async (req,res)=>{
    let success = false
    // If there are errors , return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try
    {
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).json({error:"Please try to login with correct credentials"});
        }
        const passwordCompare = await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success = false
            return res.status(400).json({success , error:"Please try to login with correct credentials"});
        }
        
        const data = {
            user:{
                id:user.id
            }
        }
        const authtoken = jwt.sign(data,JWT_SECRET);
        success = true
        res.json({success , authtoken});
    }
    catch(error)
    {
        // for server error
        console.error(error);
        res.status(500).json({error:'Internal Server Error'});
    }

});

// ROUTE 3: Get loggedin User details using: POST "/api/auth/getuser". login required
router.post('/getuser',fetchuser,async (req,res)=>{
    try 
    {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } 
    catch (error) 
    {
        // for server error
        console.error(error);
        res.status(500).json({error:'Internal Server Error'});
    }
});
module.exports = router