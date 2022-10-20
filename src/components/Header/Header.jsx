import React from 'react';
import './Header.css';
import Swing from 'react-reveal/Swing';
import { Link } from 'react-router-dom';

const nav_links = [
    {
        path: '/',
        display: 'Home'
    },
    {
        path: '/technology',
        display: 'Technology Stack'
    },
    {
        path: '/product',
        display: 'Product'
    },
    {
        path: '/contact',
        display: 'Contact'
    },
    {
        path: '/about',
        display: 'About'
    },
]

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
            <Swing>
                <div className='nav_wrapper'>
                    <div className='logo'>
                        <h2>Scan IT</h2>
                       
                    </div>
                    <div className='navigation'>
                        <ul  className='menu'>
                            {
                                nav_links.map((item, index) => (
                                    <li className='menu_item' key={index}>
                                        <Link to={item.path} className='menu_link'>
                                            {item.display}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='light_mode'>
                        <span><i className="ri-sun-line"></i> Light Mode</span>
                    </div>
                </div>
                </Swing>
            </div>
        </header>
    );
};

export default Header;