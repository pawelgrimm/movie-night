import React, { Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
const CreateBallotPage = lazy(() =>
  import("../../pages/CreateBallotPage/CreateBallotPage")
);
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Header from "../../components/Header/Header";
import VotingPage from "../../pages/VotingPage/VotingPage";
import DashboardPage from "../../pages/DashboardPage/DashboardPage";
import ResultsPage from "../../pages/ResultsPage/ResultsPage";
import Footer from "../../components/Footer/Footer";
import AboutPage from "../../pages/AboutPage/AboutPage";

export const history = createHistory();

const AppRouter = ({ appElement }) => (
  <Router history={history}>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
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
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route component={NotFoundPage} />
      </Switch>
    </Suspense>
    <Footer />
  </Router>
);

export default AppRouter;
