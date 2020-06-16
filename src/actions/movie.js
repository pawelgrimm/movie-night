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

export const updateMovie = (id, updates) => {
  return {
    type: "UPDATE_MOVIE",
    id,
    updates,
  };
};
