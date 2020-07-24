// Store creation
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../services/auth/reducer";
import movieReducer from "../services/movie/reducer";
import videoModalReducer from "../containers/VideoModal/service/reducer";
import ballotReducer from "../services/ballot/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      movies: movieReducer,
      videoModal: videoModalReducer,
      ballot: ballotReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
