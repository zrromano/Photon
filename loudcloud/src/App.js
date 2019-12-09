import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/common/navbar";
import NotFound from "./components/common/notFound";
import Home from "./components/home";
import Profile from "./components/profile";
import Pictures from "./components/pictures";
import AccountSettings from "./components/accountSettings";
import AccountForm from "./components/accountForm";
import Login from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/common/logout";
import ProtectedRoute from "./components/common/protectedRoute";
import auth from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const links = [];
    return (
      <main className="container-fluid" role="main">
        <NavBar links={links} user={user} />
        <div style={{ padding: "60px 30px 30px 30px" }}>

          <ToastContainer />
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={Login} />
            <ProtectedRoute
              path="/profile/account-settings"
              component={AccountSettings}
            />
            <ProtectedRoute
            path="/profile/account-settings/delete-account"
            component={AccountForm}
            />
            <ProtectedRoute path="/profile" component={Profile} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/pictures" component={Pictures} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
