import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: { fullName: "", username: "", password: "" },
    errors: {}
  };

  schema = {
    fullName: Joi.string()
      .required()
      .label("Full Name"),
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("Username"),
    password: Joi.string()
      .min(3)
      .required()
      .label("Password")
  };

  doSubmit = () => {};

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("fullName", "Full Name", "text", null, 6)}
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Submit")}
      </form>
    );
  }
}

export default RegisterForm;
