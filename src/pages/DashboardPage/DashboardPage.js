import React from "react";
import AppPage from "../../components/AppPage/AppPage";
import DashboardInfoCard from "./components/DashboardInfo";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import EndVotingButton from "./components/EndVotingButton";
import EditBallotButton from "./components/EditBallotButton";
import ResultsMovieListContainer from "../../containers/Results/components/ResultsMovieListContainer/ResultsMovieListContainer";
import ResultsProvider from "../../containers/Results/ResultsProvider";
import DashboardPageContainer from "./components/DashboardPageContainer";

const DashboardPage = () => {
  return (
    <ResultsProvider>
      <AppPage>
        <DashboardPageContainer>
          <DashboardInfoCard />
          <ButtonGroup>
            <EndVotingButton />
            <EditBallotButton />
          </ButtonGroup>
          <ResultsMovieListContainer />
        </DashboardPageContainer>
      </AppPage>
    </ResultsProvider>
  );
};

export default DashboardPage;
