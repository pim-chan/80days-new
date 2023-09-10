import React from 'react';
import Navigation from './Navigation';
import Logo from '../components/Logo';

const Header = () => {
    return (
        <header>
            <div className="container">
                <Logo/>
                <Navigation/>         
            </div>
        </header>

    );
};

export default Header;