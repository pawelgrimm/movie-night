import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import CreateBallotPage from "../../pages/CreateBallotPage/CreateBallotPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Header from "../../components/Header/Header";
import BallotPage from "../../pages/BallotPage/BallotPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";

export const history = createHistory();

const AppRouter = ({ appElement }) => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route
        exact
        path="/"
        component={() => <Redirect to="/create-ballot" />}
      />
      <Route
        path="/create-ballot"
        render={(...props) => (
          <CreateBallotPage {...props} appElement={appElement} />
        )}
      />
      <Route
        path="/dashboard/:id"
        render={(...props) => (
          <DashboardPage {...props} appElement={appElement} />
        )}
      />
      <Route
        path="/ballot/:id"
        render={(...props) => <BallotPage {...props} appElement={appElement} />}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
