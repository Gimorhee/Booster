import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SubNavBar } from "./components/NavBar/SubNavBar";
import { MainNavBar } from "./components/NavBar/MainNavBar";
import { Overview } from "./components/Overview/Overview";
import { Register } from "./components/User/Register";
import { Login } from "./components/User/Login";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <MainNavBar />
        <Route exact path="/" component={SubNavBar} />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
