import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoginInput = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="pwd">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>

        <div className="d-grid">
          <Button variant="outline-warning" className="mb-3 rounded-pill">
            Login
          </Button>
          <div className="text-center mt-3">
            <div>Lost your password?</div>

            <div>
              Don't have an account?{" "}
              <Link to="/register">Create an account</Link>
            </div>

            <p className="mt-5"> Privacy Policy </p>
          </div>
        </div>
      </Form>
    </Container>
  );
};
