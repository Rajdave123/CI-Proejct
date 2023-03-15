import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Formc = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="firstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Enter phone numbre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="pwd">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmpwd">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="enter confirm password" />
        </Form.Group>
        <div className="text-center d-grid mt-4">
          <Button variant="outline-warning" className="mb-3 rounded-pill">
            Register
          </Button>
          <h6>
            <Link to="/forget" style={{ textDecoration: "none" }}>
              Lost your password?
            </Link>
          </h6>
          <p>
            Already Register?
            <Link to="/" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
          <footer className="mt-4">Privacy Policy</footer>
        </div>
      </Form>
    </Container>
  );
};
