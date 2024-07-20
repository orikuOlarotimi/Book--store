import React from 'react'
import { Link } from "react-router-dom";

const Forgot = () => {
  return (
    <div>
        <div className='signin_wrap'>
        <form action='' className='signin_form'>
          <h1>Forgotten password</h1>
          <div className='input-box'>
            <input  type='email' placeholder='Please Input Your Email Address'/>
          </div>
          <div className='input-box'>
            <input  type='password' placeholder='PLease Input a New Password'/>
          </div>
          <div className='input-box'>
            <input type='password' placeholder='Confirm Password'/>
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

export default Forgot
