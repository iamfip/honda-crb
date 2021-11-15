import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Review from "../Review/Review";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";

import AddProducts from "../AddProducts/AddProducts";
import "./Dashboard.css";
import ManageOrders from "../ManageOrder/ManangeOrder";
const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="dasboard-drawer">
                           
                                <Link to={`${url}`}>Dashboard</Link>

                            <Link to={`${url}/myorders`}>My Orders</Link>

                            <Link to={`${url}/pay`}>Pay</Link>

                            <Link to={`${url}/review`}>Review</Link>

                            <Link to={`${url}/addproducts`}>AddProducts</Link>
                            <Link to={`${url}/manageOrders`}>ManageOrders</Link>
                           
                        </div>
                    </div>
                    <div className="col-md-9">
                       <div>
                       <Switch>
                            <Route exact path={`${path}/myorders`}>
                                <MyOrders></MyOrders>
                            </Route>
                            <Route exact path={`${path}/pay`}>
                                <Pay></Pay>
                            </Route>
                            <Route exact path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                            <Route exact path={`${path}/addproducts`}>
                                <AddProducts></AddProducts>
                            </Route>
                            <Route exact path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </Route>
                        </Switch>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
