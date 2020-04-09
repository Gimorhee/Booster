import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { SubNavBar } from "./components/NavBar/SubNavBar";
import { MainNavBar } from "./components/NavBar/MainNavBar";
import { Overview } from "./components/Overview/Overview";
import { Register } from "./components/User/Register";
import { Login } from "./components/User/Login";
import { Features } from "./components/Features/Features";
import { HowToUse } from "./components/HowToUse/HowToUse";
import { Games } from "./components/Games/Games";
import { Pricing } from "./components/Pricing/Pricing";
import { Extensions } from "./components/Extensions/Extensions";

import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <MainNavBar />
        <Route exact path={["/", "/overview","/features","/howtouse","/games","/pricing","/extensions"]} component={SubNavBar} />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/howtouse" component={HowToUse} />
          <Route exact path="/games" component={Games} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/extensions" component={Extensions} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
