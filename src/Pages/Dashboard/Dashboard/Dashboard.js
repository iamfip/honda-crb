import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";
import Review from "../Review/Review"
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/review`}>Review</Link>
                </li>
               
            </ul>

            <Switch>
                <Route exact path={`${path}/review`} >
                    <Review></Review>

                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;
