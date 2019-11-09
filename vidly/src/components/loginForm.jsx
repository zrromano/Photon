import React from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        {this.renderInput("username", "Username")}
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
