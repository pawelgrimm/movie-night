import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import NominationPage from "../../pages/NominationPage/NominationPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Header from "../../components/Header/Header";
import BallotPage from "../../pages/BallotPage/BallotPage";

export const history = createHistory();

const AppRouter = ({ appElement }) => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route exact path="/" component={() => <Redirect to="/nomination" />} />
      <Route
        path="/nomination"
        render={(...props) => (
          <NominationPage
            {...props}
            history={history}
            appElement={appElement}
          />
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
