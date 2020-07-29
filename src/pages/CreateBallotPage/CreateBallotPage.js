import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieSearch from "../../containers/MovieSearch/MovieSearch";
import { clearBallot } from "../../services/ballot/actions";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";

import AppPage from "../../components/AppPage/AppPage";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import SaveBallotButton from "./components/SaveBallotButton";
import StartOverButton from "./components/StartOverButton";
import CreateBallotMovieListContainer from "./components/CreateBallotMovieListContainer";

const mapStateToProps = ({ ballot }) => ({
  movies: ballot.movies,
  newBallot: ballot.id,
});

const mapDispatchToProps = (dispatch) => ({
  clearBallot: () => dispatch(clearBallot()),
});

export const CreateBallotPage = ({ movies = [], newBallot, clearBallot }) => {
  const history = useHistory();

  useEffect(() => {
    if (newBallot) {
      clearBallot();
      history.push(`dashboard/${newBallot}`);
    }
  }, [newBallot]);

  return (
    <AppPage>
      <WelcomeMessage isHidden={movies.length > 0} />
      <MovieSearch numResults={5} />
      <CreateBallotMovieListContainer />
      <ButtonGroup>
        <SaveBallotButton />
        <StartOverButton />
      </ButtonGroup>
    </AppPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBallotPage);
