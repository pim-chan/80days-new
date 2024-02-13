import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(()=> {
        const onScroll = () => {
            if(window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };
        
        window.addEventListener('scroll', onScroll); 

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header className={isScrolling ? 'sticky' : ''}>
            <div className="overlay"></div>
            <div className="container">
                <NavLink to="/">
                    <div className="logo">
                        <img src='/images/logo80days.png' alt="" className="logo__img"/>
                        <h1 className='title'>80Days</h1>
                    </div>
                </NavLink>
                <Navigation/>         
            </div>
        </header>

    );
};

export default Header;