import React from 'react';
import Card from '../components/Card';

const PopularSection = () => {
    return (
        <div className='popular-section'>
            <h2 className='popular-section__title'>Discover Our Most Popular <strong>Destinations</strong></h2>
            <p className='text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, reiciendis!</p>
            <div className="cards__container">
                <Card/>
            </div>
        </div>
    );
};

export default PopularSection;