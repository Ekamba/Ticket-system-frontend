import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Login = ({
  handleChange,
  email,
  password,
  handleSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-success text-center">Client Login Form</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                required
              />
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter Password"
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a
            href="#!"
            className="text-success"
            onClick={() => formSwitcher("reset")}
          >
            Forgot Password?
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

Login.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  formSwitcher: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
