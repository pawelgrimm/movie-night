// Store creation
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import movieReducer from "../services/movie/reducer";
import ballotReducer from "../services/ballot/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      movies: movieReducer,
      ballot: ballotReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
