import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks1 = [
    {
        path: '/marketing',
        display: 'Marketing'
    },
    {
        path: '/analytics',
        display: 'Analytics'
    },
    {
        path: '/experience',
        display: 'Experience'
    },
]
const quickLinks2 = [
    {
        path: '/pricing',
        display: 'Pricing'
    },
    {
        path: '/documention',
        display: 'Documention'
    },
    {
        path: '/career',
        display: 'Career'
    },
]
const quickLinks3 = [
    {
        path: '/technology',
        display: 'Technology'
    },
    {
        path: '/Product',
        display: 'product'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
]

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer_wrapper'>
                    <div className='footer_logo'>
                        <h2>Scan IT</h2>
                        <p className='description'>Grow with us</p>
                        <p className='small_text description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ullam sed. Numquam eos similique repella.</p>
                    </div>

                    <div className='footer_quick-links'>
                        <h3 className='quick-links-title'>Solutions</h3>
                        <ul className='quick-links'>
                            {
                                quickLinks1.map((item, index) => (
                                    <li className='quick-links-item'><Link to={item.path}>{item.display}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer_quick-links'>
                        <h3 className='quick-links-title'>Support</h3>
                        <ul className='quick-links'>
                            {
                                quickLinks2.map((item, index) => (
                                    <li className='quick-links-item'><Link to={item.path}>{item.display}</Link></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer_quick-links'>
                        <h3 className='quick-links-title'>Company</h3>
                        <ul className='quick-links'>
                            {
                                quickLinks3.map((item, index) => (
                                    <li className='quick-links-item' key={index}><Link to={item.path}>{item.display}</Link></li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
                <p className='copyright'>@ Copyright {year}, developed by Sohel Rana. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;