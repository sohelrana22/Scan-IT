import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import website from './../../images/website.jpg';
import website1 from './../../images/website1.jpg';
import website2 from './../../images/website2.jpg';
import website3 from './../../images/website4.jpg';
import website4 from './../../images/website5.jpg';
import website5 from './../../images/website6.jpg';
import './../styles/Project.css';


const projectData = [
    {
        imgUrl: website,
        title: 'Counter Software',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: website1,
        title: 'efoddies',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: website2,
        title: 'School Management',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: website3,
        title: 'Medical Software',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: website4,
        title: 'Multi-POS',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
    {
        imgUrl: website5,
        title: 'Sales App',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        linkUrl: '#'
    },
]
const Product = () => {
    return (
        <div>
            <Header />
            <section>
            
            <div className='container'>
                <div className='project_top-content'>
                    <h6 className='subtitle'>Our Project</h6>
                    <h2>Let's have a look from our  
                        <span className='highlight'> recent project</span>
                    </h2>
                </div>
                <div className='project_wrapper'>
                   {
                    projectData.map((item, index) => (
                        <div className='project_item' key={index}>
                        <h3>{item.title}</h3>
                        <div className='project_img'>
                            <img src={item.imgUrl} alt="" />
                        </div>
                        <p className='description project_desc'>{item.des}</p>
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

export default Product;