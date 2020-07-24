import moment from "moment";
import {
  SAVE_MOVIE,
  SET_MOVIES,
  FETCH_MOVIE_REQUEST,
  FETCH_MOVIE_SUCCESS,
  FETCH_MOVIE_FAILURE,
} from "./actions";

// const defaultState = [];
const defaultState = {};

const movieReducer = (state = defaultState, action) => {
  const id = action.id;
  switch (action.type) {
    case SAVE_MOVIE:
      const movieToSave = { ...state[id], isSaved: true, info: action.info };
      return { ...state, [id]: movieToSave };
    case SET_MOVIES:
      return { ...action.movies };
    case FETCH_MOVIE_REQUEST:
      return { ...state, [id]: { ...state[id], isFetching: true } };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        [id]: {
          ...state[id],
          isFetching: false,
          isSaved: true,
          lastFetched: moment.now(),
        },
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        [id]: { ...state[id], isFetching: false },
      };
    default:
      return state;
  }
};

export default movieReducer;
