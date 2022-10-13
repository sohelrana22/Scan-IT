import React from 'react';
import './../styles/About.css';
import aboutImg from './../../images/about-us.jpg';

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First Working Process',
        dec: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.'
    },
    {
        icon: 'ri-team-line',
        title: 'Dedicated Team',
        dec: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.'
    },
    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Hours Support',
        dec: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.'
    },
]

const About = () => {
    return (
        <section id='about'>
            <div className='container'>
                <div className='about_wrapper'>
                    <div className='about_content'>
                        <h6 className='subtitle'>Why choose us</h6>
                        <h2>Specialist in aviding clients on</h2>
                        <h2 className='highlight'>financial challenges</h2>
                        <p className='description about_content_des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.</p>
                        <div className='choose_item-wrapper'>
                            {
                                chooseData.map((item, index) =>(
                                    <div className="choose_us_item">
                            <span className="choose_us_icon"><i class={item.icon}></i></span>
                           <div>
                                <h4 className="choose_us_title">{item.title}</h4>
                                <p className='description'>{item.dec}</p>
                           </div>
                        </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='about_img'>
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;