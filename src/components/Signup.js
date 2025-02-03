import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';

const Signup = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;
    let navigate = useNavigate();
    const [credentials,setCredentials] = useState({name:"",email:"" , password:"", cpassword:""})
    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
      }

      const handleSubmit = async (e) =>{
        e.preventDefault();
        // Api Call
        const {name,email,password} = credentials;
        const response = await fetch(`${apiUrl}/api/auth/createuser`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password}),
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
          localStorage.setItem('token' , json.authtoken)
          navigate("/")
          props.showAlert("Account Created Successfully","success")
        }
        else{
          props.showAlert("Invalid Details","danger")
        }
    }

  return (
    <div className={`${styles.container}`}>
      <div className={styles.formContainer}>
      <h2 className='text-center'>Create an account</h2>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' onChange={onChange} aria-describedby="emailHelp" placeholder='Enter your name'/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' onChange={onChange} aria-describedby="emailHelp" placeholder='Enter your email'/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
            <div id="emailHelp" className={`form-text ${styles.formTextWhite}`}>We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" onChange={onChange} name='password' minLength={5} required placeholder='Enter your password'/>
        </div>
        <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="cpassword" onChange={onChange} name='cpassword' minLength={5} required placeholder='Enter your password again'/>
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

export default Signup
