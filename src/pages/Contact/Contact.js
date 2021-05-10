import React from "react";
import { Form, Button } from "react-bootstrap";
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";
import "./contact.css";

function Contact() {
  const { keyframes, animationOptions } = zoomIn;
  const { ref } = useWebAnimations({
    keyframes,
    animationOptions: {
      ...animationOptions,
      duration: animationOptions.duration * 3,
      delay: 500,
      easing: "ease-in-out"
    },
  });

  return (
    <div className="contactMainDiv" ref={ref}>
      <h1>Contact Us</h1>
      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name.." />
        <br />
        <Form.Label>Phone Num</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number.." />
        <br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email.." />
        </Form.Group>
        <br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br />
      <br />
    </div>
  );
}

export default Contact;
