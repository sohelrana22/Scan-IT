import React from 'react';
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
        path: '/commerce',
        display: 'Commerce'
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
        path: '/guides',
        display: 'Guides'
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
                                    <li className='quick-links-item'><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer_quick-links'>
                        <h3 className='quick-links-title'>Support</h3>
                        <ul className='quick-links'>
                            {
                                quickLinks2.map((item, index) => (
                                    <li className='quick-links-item'><a href={item.path}>{item.display}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='footer_quick-links'>
                        <h3 className='quick-links-title'>Company</h3>
                        <ul className='quick-links'>
                            {
                                quickLinks3.map((item, index) => (
                                    <li className='quick-links-item' key={index}><a href={item.path}>{item.display}</a></li>
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