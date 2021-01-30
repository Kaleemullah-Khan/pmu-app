import React from 'react';
import {Nav, NavDropdown, Navbar} from "react-bootstrap"
export const NavSection = () => {
    return (
        <div>
          <img src="Assets/pmu logo 2.png" alt=""/>
          <h2 style={{color:"blue"}}>Prince Mohammad Bin Fahd University</h2><br/>
          <h6 style={{color:"RGB(245, 66, 93)"}}>CREATIVE MINDS,TRANSFORM THE WORLD</h6>
          <Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Academics </Nav.Link>
      <NavDropdown title="" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">COLLEGE OF ENGINEERING</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">COLLEGE OF COMPUTER ENGINEERING & SCIENCES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">COLLEGE OF BUSINESS ADMINISTRATION</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">COLLEGE OF LAW</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">COLLEGE OF ARCHITECTURE AND DESIGN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">COLLEGE OF SCIENCES & HUMAN STUDIES</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">PREPARATORY PROGRAM</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
      <Nav.Link href="#home">SIGN IN</Nav.Link>
      <NavDropdown>
      <NavDropdown.Item href="#action/3.1">STUDENT LOGIN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">PARENT LOGIN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">GUEST LOGIN</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#home">ABOUT</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
   
        </div>
    );
};
