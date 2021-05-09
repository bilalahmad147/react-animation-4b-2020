import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import useWebAnimations, { heartBeat } from "@wellyshen/use-web-animations";
import "./home.css";

function Home() {
  const { keyframes, animationOptions } = heartBeat;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      duration: animationOptions.duration * 7,
      iterations: Infinity,
    },
  });

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
              Projects
            </Nav.Link>
            <Nav.Link className="navLink" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Container>
          <Row>
            <Col className="homeCol1">
              <h3 className='mainHeading'>Grow you business with us.</h3>
              <h5>We have team of talented developers.</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae doloremque, velit, placeat dolores atque mollitia
                nulla facilis illum eum debitis alias vitae magni explicabo quam
                maxime corporis! Modi, voluptatem quibusdam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae doloremque, velit, placeat dolores atque mollitia
                nulla facilis illum eum debitis alias vitae magni explicabo quam
                maxime corporis! Modi, voluptatem quibusdam.
              </p>
            </Col>
            <Col className="homeCol2" ref={ref}>
              <img
                src="https://png.pngtree.com/png-vector/20200312/ourmid/pngtree-modern-flat-design-concept-of-programmers-at-work-concept-software-development-png-image_2157879.jpg"
                alt="HomeMainIMage"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Home;
