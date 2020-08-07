import React, { Suspense, lazy } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory as createHistory } from "history";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const CreateBallotPage = lazy(() =>
  import("../../pages/CreateBallotPage/CreateBallotPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const VotingPage = lazy(() => import("../../pages/VotingPage/VotingPage"));
const DashboardPage = lazy(() =>
  import("../../pages/DashboardPage/DashboardPage")
);
const ResultsPage = lazy(() => import("../../pages/ResultsPage/ResultsPage"));
const AboutPage = lazy(() => import("../../pages/AboutPage/AboutPage"));

export const history = createHistory();

const AppRouter = () => (
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
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
    <Footer />
  </Router>
);

export default AppRouter;
