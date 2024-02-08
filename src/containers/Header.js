import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header>
            <div className="overlay"></div>
            <div className="container">
                <div className="logo">
                    <img src='/images/logo80days.png' alt="" className='logo__img'/>
                    <h1 className='title'>80Days</h1>
                </div>
                <Navigation/>         
            </div>
        </header>

    );
};

export default Header;