import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavbarHeader() {
  return (
    <div>
      <Navbar className="navbarDiv" bg="primary" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLink">
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link className="navLink">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link className="navLink">
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
