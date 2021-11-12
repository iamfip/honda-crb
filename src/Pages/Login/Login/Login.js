import React from 'react';
import "./Login.css"
import { useForm } from "react-hook-form";
import useAuth from '../../../contexts/useAuth';


const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const {logInWithEmail} =useAuth();

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
                                className="input-field w-75 p-2 mb-3"
                                name="email"
                                placeholder="Email"
                                type="email"
                                {...register("email", { required: true })}
                            />
                            <br />
                            <input
                                className="input-field  w-75 p-2 mb-3"
                                name="password"
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: true })}
                            />
                            <br />

                            <input
                                className="submit-btn btn btn-danger mt-3"
                                type="submit"
                                value="Register"
                            />
                        </form>
            </div>
            </div>
        </div>
    );
};

export default Login;