import React, { useState } from 'react';
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';
import LocationsList from '../components/LocationsList';


const Banner = () => {
    const dataLocations = useSelector(selectData);

    const [selectedOption, setSelectedOption] = useState('');

    const selectedLocation = dataLocations.find(location => location.country === selectedOption);
    
    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };


    return (
        <div className='banner'>
            {selectedLocation ? (
                <img src={selectedLocation.image.banner} alt={selectedLocation.country} />
            ) : (
                <img src="/images/banner/costa_rica.jpg" alt="photo France" />
            )}
            <div className="banner__overlay"></div>
            <div className="banner__content">
                <div className="banner__text">
                    <h2 className="banner__text__title">Never Let Your Men Be Greater Than Your Dad.</h2>
                    <p className="banner__text__subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="banner__searchbar">
                    <LocationsList onOptionChange={handleOptionChange} selectedOption={selectedOption}/>
                    <Button text={"Search"}/>
                </div>
            </div> 
        </div>
    );
};

export default Banner;