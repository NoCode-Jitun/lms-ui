import React, { useState } from 'react';
import './loginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const LoginRegister = () => {

    const [action, SetAction] = useState('');

    const RegistrationLink = ()  => {
        SetAction(' active');

    };

    const LoginLink = ()  => {
        SetAction('');

    };


  return (
    <div className={`wrapper${action}`}>
      
      <div className="form-box login">
        <form action="">
            <h1>Login</h1>
            <div className="inputBox">
                <input type='text' placeholder='Username' required /> <FaUser className='icon'/>
            </div>
            <div className="inputBox">
                <input type='password' placeholder='Password' required /> <FaLock className='icon'/>
                </div>
            <div className="rememberForgot">
                <label><input type='checkbox'/>Remember Me</label>

                <a href='#'>Forgot Password ?</a>
            </div>
            <button type='submit'>Login</button>

            <div className="registerLink">
                <p>Don't have an account ? <a href='#' onClick={RegistrationLink}>Register</a></p>
            </div>
        </form>
      </div>

      <div className="form-box register">
        <form action="">
            <h1>Registration</h1>
            <div className="inputBox">
                <input type='text' placeholder='Username' required /> <FaUser className='icon'/>
            </div>
            <div className="inputBox">
                <input type='email' placeholder='Email' required /> <MdEmail className='icon'/>
            </div>
            <div className="inputBox">
                <input type='password' placeholder='Password' required /> <FaLock className='icon'/>
                </div>
            <div className="rememberForgot">
                <label><input type='checkbox'/>I agree to the terms & conditions</label>

            </div>
            <button type='submit'>Register</button>

            <div className="registerLink">
                <p>Already have an account ? <a href='#' onClick={LoginLink}>Login</a></p>
            </div>
        </form>
      </div>


    </div>
  );
};

export default LoginRegister
