import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Products/Products/Products";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Review from "./Pages/Dashboard/Review/Review";
import AddProducts from "./Pages/Dashboard/AddProducts/AddProducts";

import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Purchage from "./Pages/Products/Purchage/Purchage";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/products">
                            <Products></Products>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <Route path="/login">
                            <Login></Login>
                        </Route>
                        <Route exact path="/singleProduct/:productId">
                            <Purchage></Purchage>
                        </Route>
                        <Route path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route>
                        {/* <Route exact path="/addProduct">
                        <AddProducts></AddProducts>
                    </Route> */}
                    </Switch>
                    <Footer></Footer>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
