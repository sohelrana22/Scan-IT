import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Counter from '../pages/Counter';
import Hero from '../pages/Hero';
import Newsletter from '../pages/Newsletter';
import Service from '../pages/Service';
import Team from '../pages/Team';
import Testimonial from '../pages/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Counter />
            <Service />
            <Team />
            <Testimonial />
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Home;