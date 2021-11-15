import React from 'react';
import "./Header.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import {  Link, NavLink } from "react-router-dom";
import useAuth from '../../../contexts/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
  console.log(logOut)
    return (
        <div>
           <>
  <Navbar  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  to="/">Crafty Pottery</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink className="mx-5 text-white text-decoration-none  " to="/home">Home</NavLink>
      <NavLink className="me-5 text-white text-decoration-none" to="/products">Products</NavLink>
      {/* <NavLink className="me-5 text-white text-decoration-none" to="/dashboard">dashboard</NavLink> */}
     {  user?.email && <NavLink className="me-5 text-white text-decoration-none" to="/dashboard">Dashboard</NavLink>
      }
     {user?.email ? (<Link className="me-5 text-white text-decoration-none" ><button onClick={logOut}>Logout</button></Link> ):
      <NavLink className="me-5 text-white text-decoration-none" to="/login" >Login</NavLink>}
      
       {/* <Link className="me-5 text-white text-decoration-none" ><button onClick={()=>logOut()}>Logout</button></Link>
      < NavLink className="me-5 text-white text-decoration-none" to="/login">Login</NavLink> */}
    </Nav>
    </Container>
  </Navbar>
  <br />
 
</>
        </div>
    );
};

export default Header;

// user.email ? <button>
//         <NavLink className="me-5 text-white text-decoration-none" onClick={logout}>Logout</NavLink>
//       </button>: