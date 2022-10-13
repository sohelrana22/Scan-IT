import React from 'react';
import './../styles/Service.css';
import Zoom from 'react-reveal/Zoom';
import Jello from 'react-reveal/Jello';

const serviceData = [
    {
        icon: 'ri-command-line',
        title: 'Softwear Development',
        dec: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'App Development',
        dec: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Web Development',
        dec: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.'
    },
    {
        icon: 'ri-rocket-line',
        title: 'Game Development',
        dec: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.'
    },
]

const Service = () => {
    return (
      <section id='service'>
        <div className='container'>
        <Zoom top>
            <div className='services_top-content'>
                <h6 className='subtitle'>Our Services</h6>
                <h2>Save time managing your business with</h2>
                <h2  className='highlight'>our best services</h2>
            </div>
            </Zoom>
            <div className='service_item_wrapper'>
                {
                    serviceData.map((item, index) => (
                        <Jello>
                        <div className='services_item'>
                    <span className='service_icon'>
                    <i class={item.icon}></i>
                    </span>
                    <h3 className='service_title'>{item.title}</h3>
                    <p className='description'>{item.dec}</p>
                </div>
                </Jello>    
                    ))
                }
            </div>
        </div>
      </section>
    );
};

export default Service;