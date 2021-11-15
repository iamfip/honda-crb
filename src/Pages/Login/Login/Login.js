import React from 'react';
import "./Login.css"
import { useForm } from "react-hook-form";
// import {  useLocation, useHistory } from 'react-router-dom';

import useAuth from '../../../contexts/useAuth';
import { Link } from 'react-router-dom';


const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const {logInWithEmail,user} =useAuth();

    // const location = useLocation();
    // const history = useHistory();

    const onSubmit = (data) => {
        
        logInWithEmail(data.email, data.password);
        // console.log(data.email);
      };
    return (
        <div className="vh-100" >
            <div className="container">
            <div className=" justify-content-center align-items-center">
                <h2 >Please Log In </h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                            
                            <input
                                className="input-field w-50 p-2 mb-3"
                                name="email"
                                placeholder="Email"
                                type="email"
                                {...register("email", { required: true })}
                            />
                            <br />
                            <input
                                className="input-field  w-50 p-2 mb-3"
                                name="password"
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            <br />

                            <input
                                className="submit-btn btn btn-danger mt-3"
                                type="submit"
                                value="Login"
                            />
                            <br />
                            <hr className="w-50 m-auto my-5" /> 
                            <h4>New User ? <Link to="/register" style={{textDecoration:"none"}}>Please Register ! </Link> </h4>
                        </form>
            </div>
            </div>
        </div>
    );
};

export default Login;