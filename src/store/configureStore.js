// Store creation
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducer from "../services/auth/reducer";
import movieReducer from "../services/movie/reducer";
import ballotReducer from "../services/ballot/reducer";
import modalReducer from "../containers/Modal/service/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      movies: movieReducer,
      ballot: ballotReducer,
      modal: modalReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
