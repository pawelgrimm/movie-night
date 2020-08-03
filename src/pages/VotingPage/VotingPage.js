import React from "react";
import MovieList from "./components/BallotMovieList";
import AppPage from "../../components/AppPage/AppPage";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import VotingMovieListContainer from "./components/VotingMovieListContainer";
import SubmitVoteButton from "./components/SubmitVoteButton";
import StartOverButton from "./components/StartOverButton";
import ResultsProvider from "../../containers/Results/ResultsProvider";
import InProgBallotPageContainer from "../../containers/Results/components/InProgBallotPageContainer";
import VoteProvider from "./components/VoteProvider";

const VotingPage = () => {
  return (
    <ResultsProvider>
      <AppPage>
        <InProgBallotPageContainer>
          <VoteProvider>
            <VotingMovieListContainer />
            <ButtonGroup>
              <SubmitVoteButton />
              <StartOverButton />
            </ButtonGroup>
          </VoteProvider>
        </InProgBallotPageContainer>
      </AppPage>
    </ResultsProvider>
  );
};

export default VotingPage;
