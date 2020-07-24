import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import MovieListItem from "./MovieListItem";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { openModal } from "../actions/videoModal";
import { getMoviesOnBallot } from "../firebase/api";
import Loader from "./Loader";
import { hydrateMovies } from "../selectors/movie";
import { fetchMovie } from "../actions/movie";

const mapStateToProps = ({ movies }) => ({
  savedMovies: movies,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (videos) => dispatch(openModal(videos)),
  fetchMovie: (id) => dispatch(fetchMovie(id)),
});

export const BallotMovieList = ({ savedMovies, openModal, fetchMovie }) => {
  const [loaded, setLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieIds, setMovieIds] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMoviesOnBallot(id).then((ref) => {
      const movieIds = ref.val();
      movieIds.forEach((id) => fetchMovie(id));
      setMovieIds(movieIds);
      setMovies(hydrateMovies(savedMovies, movieIds));
      setLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (loaded) {
      setMovies(hydrateMovies(savedMovies, movieIds));
    }
  }, [savedMovies]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <div className="list-body">
      {movies.map((movie) => {
        const id = movie.info.id;
        return (
          <MovieListItem
            key={id}
            isLoading={!movie.isSaved}
            movie={movie.info}
            collapsedButtons={collapsedButtons(id)}
            expandedButtons={expandedButtons(
              id,
              movie.info.trailers,
              openModal
            )}
          />
        );
      })}
    </div>
  );
};

const collapsedButtons = (movieId) => makeButtons(movieId, true);

const expandedButtons = (movieId, videos, openModal) => [
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
