import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './Signup.module.css';

const Login = (props) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [credentials,setCredentials] = useState({email:"" , password:""})
    let navigate = useNavigate();
    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        // Api Call
        const response = await fetch(`${apiUrl}/api/auth/login`, {
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
    // <div className='mt-3 '>
    <div className={`${styles.container}`}>
        <div className={styles.formContainer}>
        <h2 className='text-center'>Login to continue</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder='Enter your email'/>
                <div id="emailHelp" className={`form-text ${styles.formTextWhite}`}>We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password' onChange={onChange} value={credentials.password} placeholder='Enter your password'/>
            </div>
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            <div className="d-flex justify-content-center mt-3">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
        </div>
    </div>
  
  )

}

export default Login
