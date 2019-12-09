import React, { Component } from "react";
import AccountForm from "./accountForm";


class AccountSettings extends Component {
  state = {};
  render() {
    return(
    <AccountForm onSubmit={this.doSubmit}/>
);
  }

}

export default AccountSettings;
