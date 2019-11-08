import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NavBar from "./components/common/navbar";
import NotFound from "./components/notFound";
import Home from "./components/home";
import MovieForm from "./components/movieForm";
import Login from "./components/common/loginForm";

function App() {
  const links = [
    { path: "/movies", name: "Movies" },
    { path: "/customers", name: "Customers" },
    { path: "/rentals", name: "Rentals" },
    { path: "/login", name: "Login" }
  ];
  return (
    <main className="container" role="main">
      <NavBar links={links} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/movies/:id" component={MovieForm} />
        <Route path="/movies" component={Movies} />
        <Route path="/customers" component={Customers} />
        <Route path="/rentals" component={Rentals} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Redirect to="/not-found" />
      </Switch>
    </main>
  );
}

export default App;
