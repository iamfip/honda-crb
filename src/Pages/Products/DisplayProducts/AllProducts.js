import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch("https://crafty-pottery.herokuapp.com/allProducts")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllProducts(data);
            });
    }, []);

    return (
        <div className="container ">
            <h1 className="my-4 fw-bolder" style={{ color: "tomato" }}>
                {" "}
                All Products
            </h1>
            <Row xs={1} md={3} className="g-4">
                {allProducts.map((pd, index) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={pd?.image} />
                            <Card.Body>
                                <Card.Title className="fw-bolder">
                                    {pd?.name}
                                </Card.Title>
                                <Card.Text>
                                    <h4>$ {pd?.price}</h4>
                                </Card.Text>

                                <Link to={`/singleProduct/${pd._id}`}>
                                    <button className="btn btn-danger">
                                        Buy Now
                                    </button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default AllProducts;
