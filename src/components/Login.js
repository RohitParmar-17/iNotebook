import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Login = (props) => {
<<<<<<< HEAD
    const apiUrl = process.env.REACT_APP_API_URL;
=======
    const host = "https://inotebook-yi2n.onrender.com";
>>>>>>> 858098a618459fc9beb33b2d6c3b8e6c2f896b65
    const [credentials,setCredentials] = useState({email:"" , password:""})
    let navigate = useNavigate();
    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // Api Call
<<<<<<< HEAD
        const response = await fetch(`${apiUrl}/api/auth/login`, {
=======
        const response = await fetch(`${host}/api/auth/login`, {
>>>>>>> 858098a618459fc9beb33b2d6c3b8e6c2f896b65
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password}),
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token' , json.authtoken);
            props.showAlert("Logged in Successfully","success")
            navigate("/")
        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }
    }
  return (
    <div className='mt-3'>
        <h2 className='text-center'>Login to continue to iNotebook</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  
  )

}

export default Login
