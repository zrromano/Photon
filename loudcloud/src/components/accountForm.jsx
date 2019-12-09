import React, {Component} from "react";
import  {Link, Redirect} from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import { update } from "../services/userService";
import authUser from "../services/authService";

class AccountForm extends Form{
  state = {
    data: {username: "", password: "", email:""},
    errors: {}
  };
  schema = {
    username: Joi.string()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password"),
    email: Joi.string()
    .label("Email")
};

doSubmit = async () => {
  try{
    const {data} = this.state;
    await update(data);

    const {state } = this.props.location;
    window.location = state ? state.from.pathname : "/profile";
  } catch (ex) {
    if(ex.response && ex.response.status === 400){
      const errors = {...this.state.errors };
      errors.username = ex.response.data;
      this.setState({ errors });
    }
  }
};

render() {
  
  return (
    <form onSubmit={this.handleSubmit}>
    <h1>Account Settings</h1>
    {this.renderInput("username", "Username")}
    {this.renderInput("password", "Password", "password")}
    {this.renderInput("email", "Email")}
    {this.renderButton("Save Changes")}
    <Link to="/profile/account-settings/delete-account">
      <small className="form-text text-primary">
        Don't want your account anymore?
        </small>
      </Link>
    </form>
    );
  }
}

export default AccountForm;
