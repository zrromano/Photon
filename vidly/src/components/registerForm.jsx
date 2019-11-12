import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Full Name"),
    email: Joi.string()
      .min(5)
      .max(30)
      .required()
      .label("Email"),
    password: Joi.string()
      .min(3)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      localStorage.setItem("token", response.headers["x-auth-token"]);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex);
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
        console.log(errors);
      }
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(
          "email",
          "E-mail Address",
          "email",
          "We won't share your e-mail with anyone",
          6
        )}
        {this.renderInput("password", "Password", "password")}
        {this.renderInput("name", "Full Name")}
        {this.renderButton("Register")}
      </form>
    );
  }
}

export default RegisterForm;
