import React, { useState } from "react";
import { connect } from "react-redux";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import VideoModal from "./VideoModal";
import ConfirmationModal from "./ConfirmationModal";
import { setMovies } from "../actions/movie";

const mapStateToProps = ({ movies }) => ({
  movies: movies,
});

const mapDispatchToProps = (dispatch) => ({
  clearMovieList: () => dispatch(setMovies([])),
});

export const NominationPage = ({ appElement, clearMovieList, movies = [] }) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  return (
    <div className="content-container">
      <MovieSearch numResults={5} />
      <MovieList />
      <div className="container--flex-row">
        <button className="button">Next (Voting)</button>
        <button
          className="button button--secondary"
          onClick={() => setConfirmationModalOpen(true)}
          disabled={movies.length < 1}
        >
          Start Over
        </button>
      </div>
      <VideoModal appElement={appElement} />
      <ConfirmationModal
        appElement={appElement}
        isOpen={isConfirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        onConfirm={() => {
          clearMovieList();
          setConfirmationModalOpen(false);
        }}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NominationPage);
