const movieReducer = (state, action) => {
  // Temporary wrapper to support saving to localStorage for development
  let endState;
  switch (action.type) {
    case "ADD_MOVIE":
      endState = [...state, action.movie];
      break;
    case "REMOVE_MOVIE":
      endState = state.filter((movie) => movie.id !== action.id);
      break;
    case "UPDATE_MOVIE":
      endState = state.map((movie) => {
        if (movie.id === action.id) {
          return { ...movie, ...action.updates };
        } else {
          return movie;
        }
      });
      break;
    case "SET_MOVIES":
      endState = action.movies;
      break;
    default:
      endState = state;
      break;
  }
  localStorage.setItem("movies", JSON.stringify(endState));
  return endState;
};

export default movieReducer;
