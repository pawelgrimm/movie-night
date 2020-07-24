import {
  SAVE_BALLOT_REQUEST,
  SAVE_BALLOT_SUCCESS,
  SAVE_BALLOT_FAILURE,
  ADD_MOVIE,
  REMOVE_MOVIE,
  SET_BALLOT,
  CLEAR_BALLOT,
} from "../actions/ballot";

const defaultState = {
  isSaving: false,
  id: undefined,
  movies: [],
};

const ballotReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_BALLOT_REQUEST:
      return { ...state, isSaving: true, id: undefined };
    case SAVE_BALLOT_SUCCESS:
      return { ...state, isSaving: false, id: action.id };
    case SAVE_BALLOT_FAILURE:
      return { ...state, isSaving: false, id: undefined };
    case ADD_MOVIE:
      if (!state.movies.includes(action.id)) {
        return { ...state, movies: [...state.movies, action.id] };
      }
      return state;
    case REMOVE_MOVIE:
      const movies = state.movies.filter((id) => id !== action.id);
      return { ...state, movies };
    case SET_BALLOT:
      return { ...defaultState, movies: action.movies };
    case CLEAR_BALLOT:
      return defaultState;
    default:
      return state;
  }
};

export default ballotReducer;
