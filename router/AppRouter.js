import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Details from "../components/Details";
import UserForm from "../components/UserForm";
import LoginForm from "../components/LoginForm";

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Switch>
        <Route component={LoginForm} path="/" exact={true} />
        <Route component={Details} path="/details" />
        <Route component={UserForm} path="/signup" />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
