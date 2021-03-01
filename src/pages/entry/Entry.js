import React, { useState } from "react";
import "./entry.styles.css";
import { Jumbotron } from "react-bootstrap";
import Login from "../../components/login/Login";
import ResetPassword from "../../components/password-reset/ResetPassword";

const Entry = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const [formLoad, setFormLoad] = useState("login");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(state.email, state.password);
  };

  const handleResetPasswordSubmit = (e) => {
    e.preventDefault();

    console.log(state.email);
  };

  const formSwitcher = (type) => {
    setFormLoad(type);
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="entry-page">
      <Jumbotron className="form-box">
        {formLoad === "login" && (
          <Login
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formSwitcher={formSwitcher}
            email={state.email}
            password={state.password}
          />
        )}
        {formLoad === "reset" && (
          <ResetPassword
            handleChange={handleChange}
            handleResetPasswordSubmit={handleResetPasswordSubmit}
            formSwitcher={formSwitcher}
            email={state.email}
          />
        )}
      </Jumbotron>
    </div>
  );
};

export default Entry;
