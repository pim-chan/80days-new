import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';

const Card = () => {

    const dataLocations = useSelector(selectData);
    const popularLocations = dataLocations[0, 11, 13];
    console.log(popularLocations);

    return (
        <div>
            
        </div>
    );
};

export default Card;