import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Review = () => {
    const [reviews, setReviews] = useState([]);
useEffect(() => {
    fetch("http://localhost:5000/reviews")
        .then((res) => res.json())
        .then((data) => setReviews(data));
}, []);
    return (
        <div className="container mb-5 " >
           <h1 className="my-4 fw-bolder" style={{color:"tomato",}}> Reviews </h1>
            <Row xs={1} md={2} className="g-4">
                {reviews.slice(reviews.length-4 , reviews.length).map(pd =>(
                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src={pd.name} /> */}
                            <Card.Body>
                                <Card.Title><b>{pd.Name}</b></Card.Title>
                                <Card.Text>
                                    <p> {pd.review}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Review;