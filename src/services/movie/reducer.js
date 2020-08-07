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
      const movieToSave = {
        ...state[id],
        info: action.info,
      };
      return { ...state, [id]: movieToSave };
    case SET_MOVIES:
      const sanitizedState = {};
      Object.entries(action.movies).forEach(([id, data]) => {
        sanitizedState[id] = {
          ...data,
          status: {
            ...data.status,
            isFetching: false,
          },
        };
      });
      return sanitizedState;
    case FETCH_MOVIE_REQUEST:
      return {
        ...state,
        [id]: {
          ...state[id],
          status: {
            isFetching: true,
            isError: false,
            lastFetched: null,
          },
        },
      };
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        [id]: {
          ...state[id],
          info: {
            ...state[id]?.info,
            ...action.payload,
          },
          status: {
            isFetching: false,
            isError: false,
            lastFetched: Date.now(),
          },
        },
      };
    case FETCH_MOVIE_FAILURE:
      return {
        ...state,
        [id]: {
          ...state[id],
          status: {
            isFetching: false,
            isError: true,
            lastFetched: null,
          },
        },
      };
    default:
      return state;
  }
};

export default movieReducer;
