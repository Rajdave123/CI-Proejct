import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ForgetC = () => {
  return (
    <div>
      <Form>
        <div className="text-center">
          <h3>Forgot Password</h3>
          <p>
            Enter your email address.you've using for your account below and we
            will send you a Password reset link.{" "}
          </p>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>

        <div className="d-grid mt-4">
          <Button variant="outline-warning" className="mb-1 rounded-pill">
            <Link to="/" style={{ textDecoration: "none" }}>
              Reset my Password
            </Link>
          </Button>
        </div>
        <div className="text-center mt-3">
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </div>

          <p className="mt-5"> Privacy Policy </p>
        </div>
      </Form>
    </div>
  );
};
