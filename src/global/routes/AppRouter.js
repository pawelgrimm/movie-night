import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import CreateBallotPage from "../../pages/CreateBallotPage/CreateBallotPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Header from "../../components/Header/Header";
import VotingPage from "../../pages/VotingPage/VotingPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import ResultsPage from "../../pages/ResultsPage/ResultsPage";

export const history = createHistory();

const AppRouter = ({ appElement }) => (
  <Router history={history}>
    <Header />
    <Switch>
      <Route exact path="/">
        <Redirect to="/create-ballot" />
      </Route>
      <Route path="/create-ballot">
        <CreateBallotPage />
      </Route>
      <Route path="/dashboard/:id">
        <DashboardPage />
      </Route>
      <Route path="/results/:id">
        <ResultsPage />
      </Route>
      <Route path="/vote/:id">
        <VotingPage />
      </Route>
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
