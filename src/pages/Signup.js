import React from 'react';
import { Link } from 'react-router-dom';
// import { Router } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
       <div>
      <div className='signup_wrap'>
        <form action='' className='signup_form'>
          <h1>Sign Up</h1>
          <div className='input-box'>
            <input  type='text' placeholder='Please Create a Username'/>
            </div>
            <div className='input-box'>
            <input  type='email' placeholder='Please Input a valid email address'/>
            </div>
            <div className='input-box'>
            <input  type='password' placeholder='Create a Strong password'/>
          </div>
          <div className='input-box'>
            <input type='password' placeholder=' Canfirm Password'/>
          </div>
          <div className='forgot_password'>
            <label> <input type='checkbox' /> Remember Me</label>
          </div>
          <button type='submit' className='signin_btn'>Sign Up</button>
          <div className='register-link'>
            <p> Already  have an account? <Link  to="/Signin" className='label_link'>Login</Link> </p>
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Signup
