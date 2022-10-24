import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css'

const Register = () => {
    return (
        <div>
            <Header />
            <div className='form-body'>
            <div className='form-container '>
                <h2>Register</h2>
                <form className='input'>
                

                    <div className='inputBox'>
                        <label htmlFor="">Name</label>
                        <input  type="text" required  placeholder='your name' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Phone</label>
                        <input  type="phone" required  placeholder='your phone' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Email</label>
                        <input  type="text" required  placeholder='your email' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Image</label>
                        <input  type="file"  placeholder='your image' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Password</label>
                        <input type="password" minLength={6} required  placeholder='your password' />
                    </div>
                    <div className='inputBox'>
                        <input type="submit" value={'Register'} />
                    </div>
                
                </form>
                <p className='sub-btn'> <NavLink className="text-decoration-none" to="/login">
          Already an Account? Please Login!
        </NavLink></p>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Register;