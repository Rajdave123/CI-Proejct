import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ResetPwdInput = () => {
  return (
    <Container>
      <Form>
        <div className="text-center">
          <h4>New Password</h4>
          <p>Please Enter a new Password in the fields below.</p>
        </div>

        <Form.Group className="mb-3" controlId="pwd">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpwd">
          <Form.Label>Confirm New Password</Form.Label>
          <Form.Control type="passwrod" placeholder="confirm password" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="outline-warning" className="mb-1 rounded-pill">
            Change Password
          </Button>
          <div className="text-center mt-3">
            <div>
              <Link to="/" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </div>

            <p className="mt-5"> Privacy Policy </p>
          </div>
        </div>
      </Form>
    </Container>
  );
};
