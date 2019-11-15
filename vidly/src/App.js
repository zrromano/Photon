import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/common/navbar";
import NotFound from "./components/common/notFound";
import Home from "./components/home";
import MovieForm from "./components/movieForm";
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
    const links = [
      { path: "/movies", name: "Movies" },
      { path: "/customers", name: "Customers" },
      { path: "/rentals", name: "Rentals" }
    ];
    return (
      <main className="container-fluid" role="main">
        <NavBar links={links} user={user} />
        <div style={{ padding: "60px 30px 30px 30px" }}>
          <ToastContainer />
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={props => <Movies {...props} user={user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
