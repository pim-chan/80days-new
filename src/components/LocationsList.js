import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';


const LocationsList = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dataLocations = useSelector(selectData);

    const continentsData = dataLocations.map(location => location.continent);
    const continentsList = new Set(continentsData);

    const countriesList = dataLocations.map(location => location.country);
    

    const toggleList = () => {
        
    } 


    return (
        <div>
            <div 
            className="select_location"
            >
                <p>France</p>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 512 512"
                className='arrow'>
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
            </div>
            <ul className="locations_list hide">
                {Array.from(continentsList).map(continent => (<li className='location' key={continent}>{continent}</li>))}
            </ul>
            <ul className="locations_list hide">
                {countriesList.map(country => (<li className='location' key={country}>{country}</li>))}
            </ul>
        </div>
    );
};

export default LocationsList;