import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Products/Products/Products";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Review from "./Pages/Dashboard/Review/Review";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route exact path="/products">
                      <Products></Products>
                    </Route>
                    <Route exact path="/dashboard">
                      <Dashboard></Dashboard>
                    </Route>
                    <Route exact path="/review">
                        <Review></Review>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
