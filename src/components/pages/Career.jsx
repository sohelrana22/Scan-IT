import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './../styles/Career.css';


const careerData = [
    {
        name: "Front-End Developer",
        company: 'Scan-IT',
        linkUrl: '/careerdetail'
    },
    {
        name: "Back-End Developer",
        company: 'Scan-IT',
        linkUrl: '/careerdetail'
    },
    {
        name: "Full-Stack Developer",
        company: 'Scan-IT',
        linkUrl: '/careerdetail'
    },
    {
        name: "Software Developer",
        company: 'Scan-IT',
        linkUrl: '/careerdetail'
    },
]
const Career = () => {
    return (
        <div>
            <Header />
        <section>
        
        <div className='container'>
            <div className='career_top-content'>
                <h6 className='subtitle'>Careers</h6>
                <h2>Purpose and Profit.</h2>
                <p className='description text'>Come and find your place within our talented, global community of clever and passionate people who strive for purpose and profit.</p>
            </div>
            <div className='career_wrapper'>
               {
                careerData.map((item, index) => (
                    <div className='career_item' key={index}>
                    <h3>{item.name}</h3>
                    <p className='description career_desc'>{item.company}</p>
                    <div>
                        <button  className='primary_btn'>
                        <Link to={item.linkUrl} className='learn_more'>View more</Link>
                        </button>
                    </div>
                </div>
                ))
               }
            </div>
        </div>
       
    </section>
    <Footer />
    </div>
    );
};

export default Career;