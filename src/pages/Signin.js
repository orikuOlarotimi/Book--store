import React from 'react';
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div>
      <div className='signin_wrap'>
        <form action='' className='signin_form'>
          <h1>Login</h1>
          <div className='input-box'>
            <input  type='text' placeholder='Username required'/>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Password'/>
          </div>
          <div className='forgot_password'>
            <label> <input type='checkbox' /> Remember Me</label>
            <Link to="/Forgot" className='label_link' > Forgot password</Link>
          </div>
          <button type='submit' className='signin_btn'>Login</button>
          <div className='register-link'>
            <p> Don't have an account? <Link to="/Signup" className='label_link'>Sign up</Link> </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
