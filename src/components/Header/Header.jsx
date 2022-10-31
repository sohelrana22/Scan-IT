import React, { useContext } from 'react';
import './Header.css';
import Swing from 'react-reveal/Swing';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { Context } from '../../context/Context';

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
        path: '/products',
        display: 'Products'
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
    const { user, dispatch } = useContext(Context)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
      }

    const headerRef = useRef(null)
    const menuRef = useRef(null)

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

    const toggleMenu = () => menuRef.current.classList.toggle("menu_active");
    return (
        <header className='header' ref={headerRef}>
            <div className='container'>
            <Swing>
                <div className='nav_wrapper'>
                    <div className='logo'>
                        <h2>Scan IT</h2>
                       
                    </div>
                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
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
                        <Link to='/login' className='menu_link auth'>Login</Link>
                          <button className='primary_btn' onClick={handleLogout}> 
                        Log Out
                        </button>
                    </div>
                    <span className='mobile_menu' onClick={toggleMenu}><i class="ri-menu-line"></i></span>
                </div>
                </Swing>
            </div>
        </header>
    );
};

export default Header;