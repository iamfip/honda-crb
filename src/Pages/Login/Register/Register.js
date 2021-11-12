import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (data) => {
        // handleUserRegister(data.email, data.password);
        console.log(data);
      };
    return (
        <div
            className="vh-100"
            // style={{backgroundImage:`url("https://i.ibb.co/CBccXz0/login.jpg")`,backgroundPosition: "center"  }}
        >
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
        </div>
    );
};

export default Register;
