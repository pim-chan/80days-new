import React from 'react';
import { useSelector } from 'react-redux';
import { selectData } from '../reducers/locationDataSlice';

const Card = () => {

    const dataLocations = useSelector(selectData);
    const popularLocations = dataLocations.filter(location => {
        if (location.mostpopular) {
            return location; 
        }
    })
    console.log(popularLocations);

    return (
        <div className='cards__container'>
            {popularLocations.map(location => (
                <article key={location.country} className='card'>
                    <img src={location.image.slider} alt="" />
                    <div className="card-package__overlay">
                                <div className="overlay__text">
                                    <h3>{location.title}</h3>
                                    <p>A partir de {location.prix}</p>
                                    <div className="overlay__text__time">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='overlay__text__icon'><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                                        <p>7 Days</p>
                                    </div>
                                </div>
                            </div>
                </article>
            ) )}
        </div>
    );
};

export default Card;