
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const AllProducts = () => {
    const [allProducts,setAllProducts]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/allProducts")
        .then((res) => res.json())
        .then((data) => setAllProducts(data));
    },[])

    return (
        <div className="container ">
            <h1 className="my-4 fw-bolder" style={{ color: "tomato" }}>
                {" "}
               All Products
            </h1>
            <Row xs={1} md={3} className="g-4">
                {allProducts.map((pd) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={pd.image} />
                            <Card.Body>
                                <Card.Title className="fw-bolder">
                                    {pd.name}
                                </Card.Title>
                                <Card.Text>
                                    <h5>$ {pd.price}</h5>
                                </Card.Text>

                                <a
                                    name=""
                                    id=""
                                    class="btn btn-danger"
                                    href="#"
                                    role="button"
                                >
                                    Buy Now
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default AllProducts;