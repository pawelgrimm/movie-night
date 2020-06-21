// Store creation
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import movieReducer from "../reducers/movie";
import videoModalReducer from "../reducers/videoModal";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      movies: movieReducer,
      videoModal: videoModalReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
