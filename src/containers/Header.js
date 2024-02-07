import React from 'react';
import Navigation from './Navigation';
import Logo from '../assets/images/logo80days.png'

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt="" className='logo__img'/>
                    <h1 className='title'>80Days</h1>
                </div>
                <Navigation/>         
            </div>
        </header>

    );
};

export default Header;