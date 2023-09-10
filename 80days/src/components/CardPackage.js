import React, { useEffect, useState } from 'react';
import axios from "axios";

const CardPackage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
        .get("/locations.json")
        .then((res) => setData(res.data));
    }, []);

    return (
        <div>
           {Object.keys(data).map((continent) => (
               <div key={continent}>
                   <h2>{continent}</h2>
                   {data[continent].map((location) => (
                       <article key={`${continent}-${location.title}-${location.id}`} className='card-package'>
                            <div className="card-package__overlay"></div>
                           <img src={location.image.slider} alt="" className='card-package__img'/>
                       </article>
                   ))}
               </div>
           ))}
        </div>
    );
};

export default CardPackage;