import React from 'react';
import Counter from '../pages/Counter';
import Hero from '../pages/Hero';
import Newsletter from '../pages/Newsletter';
import Service from '../pages/Service';
import Team from '../pages/Team';
import Testimonial from '../pages/Testimonial';

const Home = () => {
    return (
        <div>
            <Hero />
            <Counter />
            <Service />
            <Team />
            <Testimonial />
            <Newsletter />
        </div>
    );
};

export default Home;