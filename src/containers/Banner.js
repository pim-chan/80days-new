import React, { useState } from 'react';
import Button from '../components/Button';
import LocationsList from '../components/LocationsList';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';

const Banner = () => {
    const dataLocations = useSelector(selectData);

    const [selectedOption, setSelectedOption] = useState('');

    // const handleOptionChange = (option) => {
    //     setSelectedOption(option);
    // };

    console.log(selectedOption);

    const selectedLocation = dataLocations.find(location => location.country === selectedOption);

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
                    <h2 className="banner__text__title">Never Let Your Memories Be Greater Than Your Dreams.</h2>
                    <p className="banner__text__subtitle">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
                <div className="banner__searchbar">
                    <LocationsList/>
                    <Button text={"Search"}/>
                </div>
            </div> 
        </div>
    );
};

export default Banner;