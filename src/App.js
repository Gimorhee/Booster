import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SubNavBar } from "./components/NavBar/SubNavBar";
import { MainNavBar } from "./components/NavBar/MainNavBar";
import { Overview } from "./components/Overview/Overview";
import { Register } from "./components/User/Register";
import { Login } from "./components/User/Login";
import { Features } from "./components/Features/Features";
import { Directions } from "./components/Directions/Directions";
import { Games } from "./components/Games/Games";
import { Pricing } from "./components/Pricing/Pricing";
import { Download } from "./components/Download/Download";

import Spinner from "./components/Spinner/Spinner";

import "./App.css";

function App() {
  const [loginForm, setLoginForm] = useState(false);
  const [loading, setLoading] = useState(true);

  const showLoginForm = () => {
    setLoginForm(!loginForm);
  };

  setTimeout(() => {
    setLoading(false);
  }, 0);

  return (
    <Router>
      {!loading ? (
        <Fragment>
          <MainNavBar showLoginForm={showLoginForm} />
          {loginForm && <Login />}
          <Route
            exact
            path={[
              "/",
              "/overview",
              "/features",
              "/directions",
              "/games",
              "/pricing",
              "/download",
            ]}
            component={SubNavBar}
          />
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/features" component={Features} />
            <Route exact path="/directions" component={Directions} />
            <Route exact path="/games" component={Games} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/download" component={Download} />
          </Switch>
        </Fragment>
      ) : (
        <Spinner />
      )}
    </Router>
  );
}

export default App;
