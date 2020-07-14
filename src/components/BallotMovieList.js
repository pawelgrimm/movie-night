import React from "react";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { openModal } from "../actions/videoModal";

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = (dispatch) => ({
  openModal: (videos) => dispatch(openModal(videos)),
});

export const BallotMovieList = ({ movies, openModal }) => {
  return (
    <div className="list-body">
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          movie={movie}
          collapsedButtons={collapsedButtons(movie.id)}
          expandedButtons={expandedButtons(movie.id, movie.trailers)}
        />
      ))}
    </div>
  );
};

const collapsedButtons = (movieId) => makeButtons(movieId, true);

const expandedButtons = (movieId, videos) => [
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
  ...makeButtons(movieId, false),
];

const makeButtons = (movieId, collapsed = true) => [
  <button
    className="button"
    onClick={(event) => {
      event.stopPropagation();
      console.log("thumbs up clicked for", movieId);
    }}
  >
    <ThumbsUp />
  </button>,
  <button
    className="button"
    onClick={(event) => {
      event.stopPropagation();
      console.log("thumbs up clicked for", movieId);
    }}
  >
    <ThumbsDown />
  </button>,
];

export default connect(mapStateToProps, mapDispatchToProps)(BallotMovieList);
