import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import swal from "sweetalert";


import useAuth from "../../../contexts/useAuth";
const Purchage = () => {
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { productId: productId } = useParams();
    // const onSubmit = (data) => console.log(JSON.stringify(data));


    const onSubmit = (data) => {
        data.email = user?.email;
        data.productName=product.name;
        data.status = "pending";
        console.log(data);
        fetch("http://localhost:5000/addOrders", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => setProduct(result));
            swal("Good job!", "You made an Order!", "success");
    };

    useEffect(() => {
        const url = `http://localhost:5000/singleProduct/${productId}`;
        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [productId]);

    return (
        <div>
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <img className="w-50" src={product.image} alt="" />
                        <p>{product?.description}</p>
                        <h3>{product?.name}</h3>
                        <h5>${product?.price}</h5>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-primary">Shipping Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <input
                                {...register("name")}
                                placeholder="Name"
                                
                                defaultValue={product?.name}
                                className="p-2 m-2 w-75 input-field"
                            />

                            <input
                                {...register("price", { required: true })}
                                placeholder="Price"
                                
                                defaultValue={product?.price}
                                type="number"
                                className="p-2 m-2 w-75 input-field"
                            /> */}
                            <input
                                {...register("user")}
                                placeholder="Name"
                                className="p-2 m-2 w-75 input-field"
                            />
                            <input
                                {...register("number", {
                                    required: true,
                                    min: 11,
                                    maxLength: 11,
                                })}
                                type="number"
                                placeholder="Mobile Number"
                                className="p-2 m-2 w-75 input-field"
                            />

                            <input
                                {...register("address", { required: true })}
                                placeholder="Address"
                                className="p-2 m-2 w-75 input-field"
                            />

                            <br />

                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}

                            <input
                                type="submit"
                                value="Order now"
                                className="btn btn-danger w-25"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchage;



