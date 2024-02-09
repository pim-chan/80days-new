import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const Navigation = () => {
    return (
        <div>
            <ul className='nav'>
                <NavLink to="/packages" className={(link) => (link.isActive ? "nav__link--active link" : "nav__link link")}>
                    <li>Packages</li>
                </NavLink>
                <NavLink to="/blog" className={(link) => (link.isActive ? "nav__link--active link" : "nav__link link")}>
                    <li>Blog</li>
                </NavLink>
                <NavLink to="/about" className={(link) => (link.isActive ? "nav__link--active link" : "nav__link link")}>
                    <li>About Us</li>
                </NavLink>
                <Button text={"book now"}/> 
            </ul>
        </div>
    );
};

export default Navigation;