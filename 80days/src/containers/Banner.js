import React from 'react';
import Button from '../components/Button';
import LocationForm from '../components/LocationForm';

const Banner = () => {
    return (
        <div className='banner'>
            <div className="banner__overlay"></div>
            <div className="banner__content">
                <div className="banner__text">
                    <h2 className="banner__text__title">Never Let Your Memories Be Greater Than Your Dreams.</h2>
                    <p className="banner__text__subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="banner__searchbar">
                    <LocationForm/>
                    <Button text={"Search"}/>
                </div>
            </div> 
        </div>
    );
};

export default Banner;