import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import useWebAnimations, { shakeY } from "@wellyshen/use-web-animations";
import "./about.css";

function About() {
  const { keyframes, animationOptions } = shakeY;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      duration: animationOptions.duration * 7,
      iterations: Infinity,
      easing: "ease-in",
      easing: "ease-out",
    },
  });

  return (
    <div>
      <Container>
        <Row>
          <Col className="homeCol1">
            <h3 className="mainHeading">Grow you business with us.</h3>
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
  );
}

export default About;
