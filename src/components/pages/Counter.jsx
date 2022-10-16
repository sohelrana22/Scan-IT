import React from 'react';
import CountUp from 'react-countup';
import '././../styles/Counter.css';

const counterData = [
    {
        number: 2500,
        text: 'Total Clients'
    },
    {
        number: 650,
        text: 'Running Project'
    },
    {
        number: 700,
        text: 'Project Completed'
    },
]

const Counter = () => {
    return (
       <section className='counter' id='projects'>
            <div className='container'>
                <div className='counter_wrapper'>
                   {
                    counterData.map((item, index) => (
                        <div className='counter_item' key={index}>
                        <h3 className='counter_number'><CountUp delay={1} end={item.number} duration={3} />+</h3>
                        <h4 className='counter_title'>{item.text}</h4>
                    </div>
                    ))
                   }
                </div>
            </div>
       </section>
    );
};

export default Counter;