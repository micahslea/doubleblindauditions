import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import JudgeRegister from "../pages/JudgeRegister";
import CandidateRegister from "../pages/CandidateRegister";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={JudgeRegister} path="/judgeregister" />
        <Route component={CandidateRegister} path="/candidateregister" />
      </Switch>
    );
  }
}

export default Router;
