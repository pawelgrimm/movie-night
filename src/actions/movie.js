import movieDb, { getMovieDetails } from "../theMovieDb/theMovieDb";

// ADD MOVIE
export const addMovie = (movie) => {
  return {
    type: "ADD_MOVIE",
    movie,
  };
};

// REMOVE MOVIE
export const removeMovie = (id) => {
  return {
    type: "REMOVE_MOVIE",
    id,
  };
};

// UPDATE MOVIE
export const updateMovie = (id, updates) => {
  return {
    type: "UPDATE_MOVIE",
    id,
    updates,
  };
};

// SET MOVIES
export const setMovies = (movies) => {
  return {
    type: "SET_MOVIES",
    movies,
  };
};
