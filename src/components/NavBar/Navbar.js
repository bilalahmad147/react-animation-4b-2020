import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";

function NavbarHeader() {
  return (
    <div>
      <Navbar className="navbarDiv" bg="primary" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navLink" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" href="#link">
              About
            </Nav.Link>
            <Nav.Link className="navLink" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarHeader;
