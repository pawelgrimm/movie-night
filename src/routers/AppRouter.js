import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import NominationPage from "../components/NominationPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

export const history = createHistory();

const AppRouter = ({ appElement }) => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/nomination" />} />
      <Route
        path="/nomination"
        render={(...props) => (
          <NominationPage {...props} appElement={appElement} />
        )}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
