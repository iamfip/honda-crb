import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ProductShow = () => {
    const [productShow, setProductShow] = useState([]);
    useEffect(() => {
        fetch("product.json")
            .then((res) => res.json())
            .then((data) => setProductShow(data));
    }, []);

    return (
        <div className="container ">
            <h1 className="my-4 fw-bolder" style={{color:"tomato",}}> Feature Products</h1>
            <Row xs={1} md={3} className="g-4">
                {productShow.map((pd) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={pd.image} />
                            <Card.Body>
                                <Card.Title>{pd.name}</Card.Title>
                                <Card.Text>
                                    <h2>$ {pd.price}</h2>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductShow;
