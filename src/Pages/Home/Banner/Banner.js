import React from "react";
import Carousel from "react-bootstrap/Carousel";
import banner1 from "../../../Images/Banner/banner1.jpg";
import banner2 from "../../../Images/Banner/banner2.jpg";
import banner3 from "../../../Images/Banner/banner3.jpg";
const Banner = () => {
    return (
        <div style={{marginTop: "-30px"}} >
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>TOP ITEMS</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>OLD IS GOLD</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>TOP EXPERTS </h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
