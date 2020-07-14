import React from "react";
import { connect } from "react-redux";
import MovieListItem from "./MovieListItem";
import { ThumbsUp, ThumbsDown } from "react-feather";

const mapStateToProps = ({ movies }) => ({ movies });

export const BallotMovieList = ({ movies }) => {
  return (
    <div className="list-body">
      {movies.map((movie) => (
        <MovieListItem
          key={movie.id}
          movie={movie}
          collapsedButtons={collapsedButtons(movie.id)}
          expandedButtons={expandedButtons(movie.id)}
        />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(BallotMovieList);

const collapsedButtons = (movieId) => makeButtons(movieId, true);

const expandedButtons = (movieId) =>
  [
    videos && videos.length > 0 && (
      <button
        className="button"
        onClick={() => {
          openModal(videos);
        }}
      >
        Watch Trailer Watch Trailer
      </button>
    ),
  ].append(makeButtons(movieId, false));

const makeButtons = (movieId, collapsed = true) => [
  <button
    className="button"
    onClick={() => console.log("thumbs up clicked for", movieId)}
  >
    <ThumbsUp />
  </button>,
  <button
    className="button"
    onClick={() => console.log("thumbs up clicked for", movieId)}
  >
    <ThumbsDown />
  </button>,
];
