import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .label("E-mail Address"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.email, data.password);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errros };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        {this.renderInput("email", "E-mail Address")}
        {this.renderInput("password", "Password", "password")}

        {this.renderButton("Login")}
        <Link to="/register">
          <small className="form-text text-primary">
            Don't have an account? Register here.
          </small>
        </Link>
      </form>
    );
  }
}

export default LoginForm;
