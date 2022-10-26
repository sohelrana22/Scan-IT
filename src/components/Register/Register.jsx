import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Register.css';
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        mobile
      })
      res.data && navigate("/login")
    } catch (error) {
      setError(true)
    }
  }
    return (
        <div>
            <Header />
            <div className='form-body'>
            <div className='form-container '>
                <h2>Register</h2>
                <form className='input' onSubmit={handleSubmit}>
                

                    <div className='inputBox'>
                        <label htmlFor="">Name</label>
                        <input  type="text" required onChange={(e) => setName(e.target.value)}  placeholder='your name' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Email</label>
                        <input  type="text" required onChange={(e) => setEmail(e.target.value)}  placeholder='your email' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Phone</label>
                        <input  type="mobile" required onChange={(e) => setMobile(e.target.value)}  placeholder='your phone' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Password</label>
                        <input type="password" minLength={6} required onChange={(e) => setPassword(e.target.value)}  placeholder='your password' />
                    </div>
                    <div className='inputBox'>
                        <label htmlFor="">Image</label>
                        <input  type="file"  placeholder='your image' />
                    </div>
                    <div className='inputBox'>
                        <input type="submit" value={'Register'} />
                    </div>
                
                </form>
                {error && <span className='error'>Someting went wrong</span>}
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