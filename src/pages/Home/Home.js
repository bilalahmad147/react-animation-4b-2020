import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
      easing: "ease-in-out",
    },
  });

  return (
    <div>
      <br />
      <br />
      <br />
      <h1 className='homeHeading'>Home Page</h1>
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
              src="https://xtrapunch.com/wp-content/uploads/2019/03/xtrapunch-development.svg"
              alt="HomeMainIMage"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
