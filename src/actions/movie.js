export const addMovie = (movie) => {
  return {
    type: "ADD_MOVIE",
    movie,
  };
};

export const removeMovie = (id) => {
  return {
    type: "REMOVE_MOVIE",
    id,
  };
};
