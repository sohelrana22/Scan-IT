import React, { useContext, useRef, } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import axios from "axios"
import { Context } from '../../context/Context';

const Login = () => {
    const userRef = useRef()
    const passRef = useRef()
    const navigate = useNavigate();
    const { dispatch, } = useContext(Context)
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch({ type: "LOGINSTART" })
      try {
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          username: userRef.current.value,
          password: passRef.current.value,
        })
        dispatch({ type: "LOGINSUCC", payload: res.data })
      } catch (error) {
        dispatch({ type: "LOGINFAILED" })
      }
      navigate("/")
    }
  
    return (
        <div>
            <Header />
            <div className='home-body p-5 form-body'>
            <div className='form-container '>
                <h2>Login</h2>
                <form className='input' onSubmit={handleSubmit}>
                
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