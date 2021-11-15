import React from "react";
import { Spinner } from "react-bootstrap";

import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading,location } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" />;
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
