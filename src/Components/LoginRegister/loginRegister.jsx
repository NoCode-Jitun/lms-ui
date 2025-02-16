import React, { useState } from 'react';
import axios from 'axios';
import './loginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdAdminPanelSettings } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const BACKEND_API_URL = 'https://augmentatech.in/api';

const LoginRegister = () => {
    const [action, setAction] = useState('');
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [registerData, setRegisterData] = useState({ username: '', email: '', password: '' });
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate();

    const handleRegistrationLink = () => setAction(' active');
    const handleLoginLink = () => setAction('');

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value });
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_API_URL}/auth/login`, loginData);
            alert('Login successful!');
            console.log(response.data);
            setUserRole(response.data.role); // Assuming the role is returned in the response
            if (response.data.role === 'admin') {
                navigate('/admin');
            } else if (response.data.role === 'student') {
                navigate('/student');
            }
        } catch (error) {
            alert('Login failed. Please check your credentials.');
            console.error(error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BACKEND_API_URL}/auth/register`, registerData);
            alert('Registration successful!');
            console.log(response.data);
        } catch (error) {
            alert('Registration failed. Please try again.');
            console.error(error);
        }
    };

    return (
        <div className="container">
            {/* Left Branding Section */}
            <div className="branding">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwhUjEzJDB0Las-QfgLg-ya__lEQnKSYAqA&s" alt="Company Logo" className="logo" />
                <h1>Access My Examination™</h1>
                <p>Your Exam Management Solution</p>
            </div>

            <div className={`wrapper${action}`}>
                <div className="form-box login">
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Login</h1>
                        <div className="inputBox">
                            <input type='email'
                                name="email"
                                placeholder='Email'
                                value={loginData.email}
                                onChange={handleLoginChange}
                                required />
                            <MdEmail className='icon' />
                        </div>
                        <div className="inputBox">
                            <input
                                type='password'
                                name="password"
                                placeholder='Password'
                                value={loginData.password}
                                onChange={handleLoginChange}
                                required />
                            <FaLock className='icon' />
                        </div>
                        <div className="rememberForgot">
                            <label><input type='checkbox' />Remember Me</label>
                            <a href='#'>Forgot Password?</a>
                        </div>
                        <button type='submit'>Login</button>
                        <div className="registerLink">
                            <p>Don't have an account? <a href='#' onClick={handleRegistrationLink}>Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <form onSubmit={handleRegisterSubmit}>
                        <h1>Registration</h1>
                        <div className="inputBox">
                            <input
                                type='text'
                                name="name"
                                placeholder='Username'
                                value={registerData.name}
                                onChange={handleRegisterChange}
                                required />
                            <FaUser className='icon' />
                        </div>
                        <div className="inputBox">
                            <input
                                type='text'
                                name="role"
                                placeholder='Role'
                                value={registerData.role}
                                onChange={handleRegisterChange}
                                required />
                            <MdAdminPanelSettings className='icon' />
                        </div>
                        <div className="inputBox">
                            <input
                                type='email'
                                name="email"
                                placeholder='Email'
                                value={registerData.email}
                                onChange={handleRegisterChange}
                                required />
                            <MdEmail className='icon' />
                        </div>
                        <div className="inputBox">
                            <input
                                type='password'
                                name="password"
                                placeholder='Password'
                                value={registerData.password}
                                onChange={handleRegisterChange}
                                required />
                            <FaLock className='icon' />
                        </div>
                        <div className="rememberForgot">
                            <label><input type='checkbox' />I agree to the terms & conditions</label>
                        </div>
                        <button type='submit'>Register</button>
                        <div className="registerLink">
                            <p>Already have an account? <a href='#' onClick={handleLoginLink}>Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginRegister;