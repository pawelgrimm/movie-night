import moment from "moment";

import { getMovieInfo, getMovieTrailers } from "../theMovieDb/theMovieDb";

export const fetchMovie = (id) => {
  return (dispatch, getState) => {
    // Is already fetching
    if (getState().movies[id]?.isFetching) {
      return;
    }
    // Has already been fetched recently
    const lastFetched = getState().movies[id]?.lastFetched;
    if (
      lastFetched &&
      moment(lastFetched).isAfter(moment().subtract(12, "hours"))
    ) {
      return;
    }

    dispatch(fetchMovieRequest(id));
    const movie = getState().movies[id].info;
    const info = getMovieInfo(id);
    const trailers = getMovieTrailers(id);
    return Promise.all([info, trailers])
      .then(([info, trailers]) => {
        dispatch(saveMovie(id, { ...movie, ...info, trailers }));
        dispatch(fetchMovieSuccess(id));
      })
      .catch(() => dispatch(fetchMovieFailure(id)));
  };
};

export const FETCH_MOVIE_REQUEST = "FETCH_MOVIE_REQUEST";
export const fetchMovieRequest = (id) => ({ type: FETCH_MOVIE_REQUEST, id });

export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const fetchMovieSuccess = (id) => ({ type: FETCH_MOVIE_SUCCESS, id });

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
