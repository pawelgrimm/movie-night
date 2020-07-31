import React from "react";
import MovieList from "./components/BallotMovieList";
import AppPage from "../../components/AppPage/AppPage";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import VotingMovieListContainer from "./components/VotingMovieListContainer";
import SubmitVoteButton from "./components/SubmitVoteButton";
import StartOverButton from "./components/StartOverButton";

const VotingPage = () => {
  return (
    <AppPage>
      <VotingMovieListContainer />
      <ButtonGroup>
        <SubmitVoteButton />
        <StartOverButton />
      </ButtonGroup>
    </AppPage>
  );
};

export default VotingPage;
