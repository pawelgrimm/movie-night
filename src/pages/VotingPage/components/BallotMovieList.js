import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import MovieListItem from "../../../components/MovieListItem/MovieListItem";
import { ThumbsUp, ThumbsDown } from "react-feather";
import { getMoviesOnBallot } from "../../../services/firebase/api";
import Loader from "../../../components/Loader/Loader";
import { hydrateMovies } from "../../../services/movie/api";
import { fetchMovie } from "../../../services/movie/actions";
import VideoModal from "../../../containers/Modal/components/VideoModal";

const mapStateToProps = ({ movies }) => ({
  savedMovies: movies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovie: (id) => dispatch(fetchMovie(id)),
});

export const BallotMovieList = ({ savedMovies, openModal, fetchMovie }) => {
  const [loaded, setLoaded] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movieIds, setMovieIds] = useState([]);
  const { id } = useParams();
  const openVideoModal = (videos) => openModal(<VideoModal videos={videos} />);

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
              openVideoModal
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
