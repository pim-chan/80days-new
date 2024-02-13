import React from 'react';
import Banner from '../containers/Banner';
import PopularSection from '../containers/PopularSection';


const Home = () => {

    return (
        <div className='content__container'>
            <Banner />
            <PopularSection/>
        </div>
    );
};

export default Home;
