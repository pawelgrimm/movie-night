import React from "react";
import AppPage from "../../components/AppPage/AppPage";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import MovieSearch from "../../containers/MovieSearch/MovieSearch";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import SaveBallotButton from "./components/SaveBallotButton";
import StartOverButton from "./components/StartOverButton";
import CreateBallotMovieListContainer from "./components/CreateBallotMovieListContainer";
import NewBallotProvider from "./components/NewBallotProvider";
import CreateBallotPageContainer from "./components/CreateBallotPageContainer";

export const CreateBallotPage = () => {
  return (
    <NewBallotProvider>
      <AppPage>
        <CreateBallotPageContainer>
          <WelcomeMessage />
          <MovieSearch numResults={5} />
          <CreateBallotMovieListContainer />
          <ButtonGroup>
            <SaveBallotButton />
            <StartOverButton />
          </ButtonGroup>
        </CreateBallotPageContainer>
      </AppPage>
    </NewBallotProvider>
  );
};

export default CreateBallotPage;
