import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const Navigation = () => {
    return (
        <div>
            <ul className='nav'>
                <NavLink to="/" className={(link) => (link.isActive ? "nav__link--active link" : "nav__link link")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/about" className={(link) => (link.isActive ? "nav__link--active link" : "nav__link link")}>
                    <li>About Us</li>
                </NavLink>
                <NavLink to="/packages" className={(link) => (link.isActive ? "nav__link--active link" : "nav__link link")}>
                    <li>Packages</li>
                </NavLink>
                <Button text={"book now"}/> 
            </ul>
        </div>
    );
};

export default Navigation;