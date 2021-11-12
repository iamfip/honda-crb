import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import AllProducts from '../DisplayProducts/AllProducts';

const Products = () => {
    return (
        <div>
            <Header></Header>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Products;