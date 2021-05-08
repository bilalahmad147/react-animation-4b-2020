import React from "react";
import "./App.css";
import { Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand href="#home" className='mainDivHome'>Bootcamp Project 4-B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Projects</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
