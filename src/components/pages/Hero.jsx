import React from 'react';
import './../styles/Hero.css';
import hero from './../../images/hero-img.png';
import Rotate from 'react-reveal/Rotate';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
       <section className='hero_section'>
        <div className='container'>
            <div className='hero_wrapper'>
            <Rotate top left>
                <div className='hero_content'>
                  <div>
                    <h2>We're Creating Perfect</h2>
                    <h2>Software Product To</h2>
                    <h2 className='highlight'>Promote Your Brand</h2>
                  </div>
                  <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.</p>
                  <div className='hero_btn'>
                    <button className='primary_btn'><Link to='/product'>Get Started Now</Link></button>
                  </div>
                </div>
                </Rotate>
                <Rotate top right>
                <div className='hero_img'>
                    <img className='img' src={hero} alt="hero" />
                </div>
                </Rotate>
            </div>
        </div>
       </section>
    );
};

export default Hero;