import differenceInHours from "date-fns/differenceInHours";
import { getMovieInfo, getMovieTrailers } from "../server/api";

export const fetchMovie = (id) => {
  return (dispatch, getState) => {
    const movies = getState().movies;
    const status = movies && movies[id]?.status;

    if (status?.isFetching) {
      return;
    } else if (
      !status?.isError &&
      status?.lastFetched &&
      differenceInHours(new Date(), new Date(status.lastFetched)) > 12
    ) {
      return;
    }

    dispatch(fetchMovieRequest(id));
    const info = getMovieInfo(id);
    const trailers = getMovieTrailers(id);
    return Promise.all([info, trailers])
      .then(([info, trailers]) => {
        dispatch(fetchMovieSuccess(id, { ...info, trailers }));
      })
      .catch(() => dispatch(fetchMovieFailure(id)));
  };
};

export const FETCH_MOVIE_REQUEST = "FETCH_MOVIE_REQUEST";
export const fetchMovieRequest = (id) => ({ type: FETCH_MOVIE_REQUEST, id });

export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const fetchMovieSuccess = (id, payload) => ({
  type: FETCH_MOVIE_SUCCESS,
  id,
  payload,
});

export const FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE";
export const fetchMovieFailure = (id) => ({ type: FETCH_MOVIE_FAILURE, id });

export const SET_MOVIES = "SET_MOVIES";
export const setMovies = (movies = {}) => ({ type: SET_MOVIES, movies });

export const SAVE_MOVIE = "SAVE_MOVIE";
export const saveMovie = (id, info) => {
  return {
    type: SAVE_MOVIE,
    id,
    info,
  };
};
