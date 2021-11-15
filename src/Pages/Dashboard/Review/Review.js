import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

import useAuth from "../../../contexts/useAuth";

const Review = () => {
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data,e) => {
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.acknowledged === true) {
                    swal("Thanks For Your FeedBack");
                    
                }
            });
            e.target.reset();
        
    };

    return (
        <div>
            <div>
                <h2>Review Page</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="p-2 m-2 w-50 input-field"
                        type="text"
                        placeholder="First name"
                        {...register("name", {
                            required: true,
                            maxLength: 40,
                        })}
                    />
                    <input
                        className="p-2 m-2 w-50 input-field"
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                    <textarea
                    placeholder="Write a Review"
                        className="p-2 m-2 w-50 input-field"
                        {...register("review", {})}
                    />
<br />
                    <input type="submit" className=" btn btn-danger" />
                </form>
            </div>
        </div>
    );
};

export default Review;
