import React from 'react';
import './Header.css';
import Swing from 'react-reveal/Swing';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

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
    {
        path: '/dashboard',
        display: 'Dashboard'
    },
]

const Header = () => {
    const headerRef = useRef(null)
    const headerFun = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            headerRef.current.classList.add('header_shrink')
        } else {
            headerRef.current.classList.remove('header_shrink')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFun)
        return () => window.removeEventListener('scroll', headerFun)
    }, [])
    return (
        <header className='header' ref={headerRef}>
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
                    <div className='menu_item'>
                        <Link to='/login' className='menu_link'>Login</Link>
                    </div>
                </div>
                </Swing>
            </div>
        </header>
    );
};

export default Header;