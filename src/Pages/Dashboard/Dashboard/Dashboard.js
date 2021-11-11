import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <Header></Header>
            
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;