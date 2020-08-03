import React from "react";
import MovieList from "./components/BallotMovieList";
import AppPage from "../../components/AppPage/AppPage";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import VotingMovieListContainer from "./components/VotingMovieListContainer";
import SubmitVoteButton from "./components/SubmitVoteButton";
import StartOverButton from "./components/StartOverButton";
import ResultsProvider from "../../containers/Results/ResultsProvider";

const VotingPage = () => {
  return (
    <ResultsProvider>
      <AppPage>
        <VotingMovieListContainer />
        <ButtonGroup>
          <SubmitVoteButton />
          <StartOverButton />
        </ButtonGroup>
      </AppPage>
    </ResultsProvider>
  );
};

export default VotingPage;
