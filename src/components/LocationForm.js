import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';

const LocationForm = ({onOptionChange, selectedOption}) => {

    const dataLocations = useSelector(selectData); 
    
    const continentsData = dataLocations.map(location => location.continent)
    const continentsList = new Set(continentsData);

    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        onOptionChange(selectedOption); 
    };

    return (
        <div>
            <form action="">
                <select name="pays" 
                    id="location-form" 
                    value={selectedOption}
                    onChange={handleSelectChange}>
                    {Array.from(continentsList).map(continent => (<optgroup key={continent} label={continent}>
                        {dataLocations.map(location => {
                            if (location.continent === continent) {
                                return (
                                    <option 
                                        key={location.id} 
                                        value={location.country} 
                                    >
                                        {location.country}
                                    </option>
                                );
                            }
                            return null;
                        })}
                    </optgroup>))}     
                </select>
            </form>
        </div>
    );
};

export default LocationForm;

