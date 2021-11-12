import React from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';



const AddProducts = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/allProducts", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.acknowledged===true)
            {
                swal("Good job!", "You Added the Product !", "success");
                
            }});
            // console.log(data);
    };
    return (
        <div className="container m-5">
            <div>
                <h1 className="text-center text-danger fw-bold">
                    Please Add Products
                </h1>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name", { required: true })}
                            placeholder="Name"
                            className="p-2 m-2 w-50 input-field"
                        />
                        <input
                            {...register("image", { required: true })}
                            placeholder="Image Link"
                            className="p-2 m-2 w-50 input-field"
                        />
                        <input
                            {...register("price", { required: true })}
                            placeholder="Price"
                            type="number"
                            className="p-2 m-2 w-50 input-field"
                        />
                        <input
                            {...register("description")}
                            placeholder="Description"
                            className="p-2 m-2 w-50 input-field"
                        />
                        <br />
                        <br />

                        <input type="submit" className=" btn btn-danger" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
