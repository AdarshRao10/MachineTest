import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";//used for routing between webpages


const Navigation = ()=>{
    return(
    
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">ADARSH</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/task">Task</Nav.Link>
      <Nav.Link as={Link} to="/user">User</Nav.Link>
    </Nav>
  </Navbar>

    )
}

export default Navigation;