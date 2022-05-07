import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Inventories from '../Inventories/Inventories';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Inventories />
            <Reviews />
            <Contact />
        </div>
    );
};

export default Home;