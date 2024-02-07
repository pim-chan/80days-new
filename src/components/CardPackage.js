import React, { useEffect, useState } from 'react';
import axios from "axios";

const CardPackage = () => {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     axios
    //     .get("/locations.json")
    //     .then((res) => setData(res.data));
    // }, []);

    return (
        <div>
           {/* {Object.keys(data).map((continent) => (
               <div key={continent}>
                   <h2>{continent}</h2>
                   {data[continent].map((location) => (
                       <article key={`${continent}-${location.title}-${location.id}`} className='card-package'>
                            <img src={location.image.slider} alt="" className='card-package__img'/>
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
                    ))}
               </div>
            ))} */}
        </div>
    );
};

export default CardPackage;