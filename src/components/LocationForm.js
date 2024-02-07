import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';

const LocationForm = () => {

    const dataLocations = useSelector(selectData); 
    const continentsData = dataLocations.map(location => location.continent)
    const continentsList = new Set(continentsData);

    return (
        <div>
            <form action="">
                <select name="pays" id="location-form" defaultValue="">
                    {Array.from(continentsList).map(continent => (<optgroup key={continent} label={continent}>
                        {dataLocations.map(location => {
                            if (location.continent === continent) {
                                return (
                                    <option key={location.country}>{location.country}</option>
                                )
                            }
                        })}
                    </optgroup>))}     
                </select>
            </form>
        </div>
    );
};

export default LocationForm;

