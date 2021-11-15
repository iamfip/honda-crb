import React from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import { Link, } from "react-router-dom";

import useAuth from "../../../contexts/useAuth";

const Register = () => {
    const { register, handleSubmit, watch, errors, resetField } = useForm();
    // const history = useHistory();
   
    const { handleUserRegister, user } = useAuth();

    // console.log(history);

    const onSubmit = (data, e) => {
        if (data.password !== data.password2) {
            swal("Your password did not match !");
            return;
        } else {
            swal("Congrats");
        }

        handleUserRegister(data.email, data.password, data.name);
        // console.log(data.email);
        e.target.reset();
        // console.log(history);
    };

    //------------ UI Render Section --------------//

    return (
        <div className="vh-100">
            <div className="container">
                <div className="my-5">
                    <h2>Please Register </h2>
                    <div className=" w-50 m-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                className="input-field w-75 p-2 mb-3"
                                name="name"
                                placeholder="Name"
                                type="text"
                                {...register("name", { required: true })}
                            />
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
                            <input
                                className="input-field  w-75 p-2 mb-3"
                                name="password2"
                                type="password"
                                placeholder="Retype Password"
                                {...register("password2", { required: true })}
                            />
                            <br />

                            <input
                                className="submit-btn btn btn-danger mt-3"
                                type="submit"
                                value="Register"
                            />
                            <br />
                            <br />
                            <h4>
                                Already Register ?{" "}
                                <Link
                                    to="/login"
                                    style={{ textDecoration: "none" }}
                                >
                                    {" "}
                                    Please Login !{" "}
                                </Link>{" "}
                            </h4>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
