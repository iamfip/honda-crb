import React from 'react';
import Footer from '../../Shared/Footer/Footer';

import Banner from '../Banner/Banner';
import ProductShow from '../ProductShow/ProductShow';
import Review from '../Review/Review';
import "./Home.css"
const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <ProductShow></ProductShow>
            <Review></Review>
           
        </div>
    );
};

export default Home;