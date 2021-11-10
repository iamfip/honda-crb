import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import {  NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
           <>
  <Navbar  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  to="/">Crafty Pottery</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink className="mx-5 text-white text-decoration-none  " to="/home">Home</NavLink>
      <NavLink className="me-5 text-white text-decoration-none" to="/products">Products</NavLink>
      <NavLink className="me-5 text-white text-decoration-none" to="/dashboard">Dashboard</NavLink>
    </Nav>
    </Container>
  </Navbar>
  <br />
 
</>
        </div>
    );
};

export default Header;