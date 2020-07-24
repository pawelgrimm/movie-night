import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";
import { Trash2 as TrashIcon } from "react-feather";
import { fetchMovie } from "../actions/movie";
import { openModal } from "../actions/videoModal";
import { hydrateMovies } from "../selectors/movie";
import { removeMovie } from "../actions/ballot";
import Loader from "./Loader";

const mapStateToProps = ({ movies, ballot }) => ({
  movies: hydrateMovies(movies, ballot.movies),
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (id) => dispatch(fetchMovie(id)),
  removeMovie: (id) => dispatch(removeMovie(id)),
  openModal: (videos) => dispatch(openModal(videos)),
});

export const NominationMovieList = ({
  movies,
  openModal,
  removeMovie,
  fetchMovie,
}) => {
  return (
    <div className="list-body">
      {movies.map((movie) => {
        const id = movie.info.id;
        fetchMovie(id);
        return (
          <MovieListItem
            key={id}
            isLoading={!movie.isSaved}
            movie={movie.info}
            collapsedButtons={collapsedButtons(id, removeMovie)}
            expandedButtons={expandedButtons(
              id,
              movie.info.trailers,
              openModal,
              removeMovie
            )}
          />
        );
      })}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NominationMovieList);

const collapsedButtons = (movieId, removeMovie) => [
  <button
    className="button button--secondary movie-item__button--small"
    onClick={(event) => {
      event.stopPropagation();
      removeMovie(movieId);
    }}
  >
    <TrashIcon />
  </button>,
];

const expandedButtons = (movieId, videos, openModal, removeMovie) => [
  videos && videos.length > 0 && (
    <button
      className="button"
      onClick={(event) => {
        event.stopPropagation();
        openModal(videos);
      }}
    >
      Watch Trailer
    </button>
  ),
  <button
    className="button button--secondary"
    onClick={(event) => {
      event.stopPropagation();
      removeMovie(movieId);
    }}
  >
    Remove Movie
  </button>,
];
