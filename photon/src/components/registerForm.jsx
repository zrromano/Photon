import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";
import auth from "../services/authService";

class RegisterForm extends Form {
  state = {
    data: {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    firstName: Joi.string()
      .max(25)
      .required()
      .label("First Name"),
    lastName: Joi.string()
      .max(25)
      .required()
      .label("Last Name"),
    username: Joi.string()
      .min(3)
      .max(15)
      .required()
      .label("Username"),
    password: Joi.string()
      .min(5)
      .max(255)
      .required()
      .label("Password"),
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .label("Email")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex);
        const errors = { ...this.state.errors };
        if(ex.response.data === "Username is already taken.")
          errors.username = ex.response.data;
        else
          errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("firstName", "First Name")}
        {this.renderInput("lastName", "Last Name")}
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput(
          "email",
          "E-mail Address",
          "email",
          "We won't share your e-mail with anyone",
          6
        )}
        {this.renderButton("Register")}
        <Link to="/login">
          <small className="form-text text-primary">
            Already have an account? Login here.
          </small>
        </Link>
      </form>
    );
  }
}

export default RegisterForm;
