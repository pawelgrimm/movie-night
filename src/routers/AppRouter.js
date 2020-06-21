import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

export const history = createHistory();

const AppRouter = ({ appElement }) => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/dashboard" />} />
      <Route
        path="/dashboard"
        render={(...props) => (
          <DashboardPage {...props} appElement={appElement} />
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
