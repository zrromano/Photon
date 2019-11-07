import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/common/navbar";

function App() {
  const links = [{ path: "/movies", name: "Movies" }];
  return (
    <main className="container" role="main">
      <NavBar links={links} />
      <Switch>
        <Route
          path="/movies/:sortColumn?/:order?"
          render={props => <Movies {...props} />}
        />
      </Switch>
    </main>
  );
}

export default App;
