import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Login = () => {
    return (
        <div>
            <Header />
            <div className='home-body p-5 form-body'>
            <div className='form-container '>
                <h2>Login</h2>
                <form className='input' >
                
                <div className='inputBox'>
                    <label htmlFor="">Email</label>
                    <input  type="text" required  placeholder='your email' />
                </div>
                <div className='inputBox'>
                    <label htmlFor="">Password</label>
                    <input  type="password" minLength={6} required  placeholder='your password' />
                </div>
                <div className='inputBox'>
                    <input type="submit" value={'Login'} />
                </div>
            
            </form>
                <p className='sub-btn'> <NavLink className="text-decoration-none" to="/register">
          Need an Account? Please Register!
        </NavLink></p>
            </div>
        </div>
        <Footer />
        </div>
    );
};

export default Login;