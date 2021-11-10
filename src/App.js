import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Products from "./Pages/Products/Products/Products";

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
                </Switch>
            </Router>
        </div>
    );
}

export default App;
