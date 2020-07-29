import React from "react";
import AppPage from "../../components/AppPage/AppPage";
import DashboardInfoCard from "./components/DashboardInfo";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import EndVotingButton from "./components/EndVotingButton";
import EditBallotButton from "./components/EditBallotButton";
import ResultsMovieListContainer from "../../containers/ResultsMovieListContainer/ResultsMovieListContainer";

const DashboardPage = () => {
  return (
    <AppPage>
      <DashboardInfoCard />
      <ButtonGroup>
        <EndVotingButton />
        <EditBallotButton />
      </ButtonGroup>
      <ResultsMovieListContainer />
    </AppPage>
  );
};

export default DashboardPage;
