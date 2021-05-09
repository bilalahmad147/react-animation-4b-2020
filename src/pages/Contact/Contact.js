import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./contact.css";

function Contact() {
  return (
    <div className="contactMainDiv">
      <h1>Contact Us</h1>
      <Form>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name.." /><br />
        <Form.Label>Phone Num</Form.Label>
        <Form.Control type="number" placeholder="Enter phone number.." /><br />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email.." />
        </Form.Group><br />
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group><br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <br /><br />
    </div>
  );
}

export default Contact;
