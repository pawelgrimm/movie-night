import movieDb, {
  getMovieInfo,
  getMovieTrailers,
} from "../theMovieDb/theMovieDb";

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
export const startUpdateMovieWithDetails = (id) => {
  return (dispatch) => {
    const info = getMovieInfo(id);
    const trailers = getMovieTrailers(id);
    return Promise.all([info, trailers]).then(([info, trailers]) => {
      dispatch(updateMovie(id, { ...info, trailers }));
    });
  };
};

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
