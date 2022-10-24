import React from 'react';
import './../styles/Technology.css';
import javaScript from './../../images/javascript.png';
import react from './../../images/react.png';
import redux from './../../images/redux.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const technologyData = [
    {
        imgUrl: javaScript,
        title: 'JavaScript',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: react,
        title: 'React',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: redux,
        title: 'Redux',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
]

const Technology = () => {
    return (
       <div>
        <Header />
         <section>
            
            <div className='container'>
                <div className='technology_top-content'>
                    <h6 className='subtitle'>Our Technology</h6>
                    <h2>Let's have a look from our  
                        <span className='highlight'> recent technology</span>
                    </h2>
                </div>
                <div className='technology_wrapper'>
                   {
                    technologyData.map((item, index) => (
                        <div className='technology_item' key={index}>
                        <h3>{item.title}</h3>
                        <div className='technology_img'>
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <p className='description technology_desc'>{item.des}</p>
                        <div>
                            <a href={item.linkUrl} className='learn_more'><i class="ri-arrow-right-line"></i></a>
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

export default Technology;