import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieSearch from "../../containers/MovieSearch/MovieSearch";
import MovieList from "./components/CreateBallotMovieList";
import { clearBallot } from "../../services/ballot/actions";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";

import AppPage from "../../components/AppPage/AppPage";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import { SaveBallotButton } from "./components/SaveBallotButton";
import StartOverButton from "./components/StartOverButton";

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
      history.push(`ballot/${newBallot}`);
    }
  }, [newBallot]);

  return (
    <AppPage>
      <WelcomeMessage isHidden={movies.length > 0} />
      <MovieSearch numResults={5} />
      {movies.length > 0 && <MovieList />}
      <ButtonGroup>
        <SaveBallotButton />
        <StartOverButton />
      </ButtonGroup>
    </AppPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBallotPage);
