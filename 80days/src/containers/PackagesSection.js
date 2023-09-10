import React from 'react';
import SliderCards from './SliderCards';

const PackagesSection = () => {
    return (
        <div className='packages-section'>
            <h2 className='packages-section__title'>Discover Our Most Popular <strong>Packages</strong></h2>
            <SliderCards/>
        </div>
    );
};

export default PackagesSection;