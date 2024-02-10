import React from 'react';
import Card from '../components/Card';

const PackagesSection = () => {
    return (
        <div className='packages-section'>
            <h2 className='packages-section__title'>Discover Our Most Popular <strong>Destinations</strong></h2>
            <div className="cards__container">
                <Card/>
            </div>
        </div>
    );
};

export default PackagesSection;