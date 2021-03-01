import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ResetPassword = ({
  handleChange,
  email,
  handleResetPasswordSubmit,
  formSwitcher,
}) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-success text-center">Reset your password</h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleResetPasswordSubmit}>
            Please
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
            </Form.Group>
            <Button variant="success" type="submit">
              Reset Password
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
            onClick={() => formSwitcher("login")}
          >
            Login Now
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ResetPassword;

ResetPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  handleResetPasswordSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};
