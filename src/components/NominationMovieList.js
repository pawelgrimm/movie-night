import React from "react";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";
import { Trash2 as TrashIcon } from "react-feather";
import { removeMovie } from "../actions/movie";
import { openModal } from "../actions/videoModal";

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = (dispatch) => ({
  removeMovie: (id) => dispatch(removeMovie(id)),
  openModal: (videos) => dispatch(openModal(videos)),
});

export const NominationMovieList = ({ movies, openModal, removeMovie }) => {
  return (
    <div className="list-body">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieListItem
            key={movie.id}
            movie={movie}
            collapsedButtons={collapsedButtons(movie.id, removeMovie)}
            expandedButtons={expandedButtons(
              movie.id,
              movie.trailers,
              openModal,
              removeMovie
            )}
          />
        ))
      ) : (
        <div>
          <h3>Welcome to Movie Night!</h3>
          <p>Use the search to add some movies to your list.</p>
          <p>
            Once you're done, send the list to your friends. They will be able
            to vote on the movies you selected!
          </p>
          <p>
            When all the votes are in, the most favorable movie will be selected
            for your movie night!
          </p>
          <p>Enjoy!</p>
        </div>
      )}
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
