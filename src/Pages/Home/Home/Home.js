import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import ProductShow from '../ProductShow/ProductShow';
import Review from '../Review/Review';
import "./Home.css"
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ProductShow></ProductShow>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;