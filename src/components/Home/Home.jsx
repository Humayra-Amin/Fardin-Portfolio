import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <About></About>

            <Service></Service>
        </div>
    );
};

export default Home;