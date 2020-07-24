import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
import LoadingPage from "./components/LoadingPage";
import { setBallot } from "./actions/ballot";
import database from "firebase";
import { fetchMovie, setMovies } from "./actions/movie";

const appElement = document.getElementById("app");
const store = configureStore();

// Load local movie db from local storage
const movies = JSON.parse(localStorage.getItem("movies")) || {};
store.dispatch(setMovies(movies));

// Load ballot from local storage
const ballotMovies = JSON.parse(localStorage.getItem("ballot/movies")) || [];
store.dispatch(setBallot(ballotMovies));

// Make sure all movies in ballot are loaded
const fetchPromises = [];
for (const id in movies) {
  if (movies.hasOwnProperty(id)) {
    fetchPromises.push(store.dispatch(fetchMovie(id)));
  }
}

store.subscribe(() => {
  const movies = store.getState().ballot.movies;
  localStorage.setItem("ballot/movies", JSON.stringify(movies));
  const cache = store.getState().movies;
  localStorage.setItem("movies", JSON.stringify(cache));
});

const jsx = (
  <Provider store={store}>
    <AppRouter appElement={appElement} />
  </Provider>
);

ReactDOM.render(jsx, appElement);

// let hasRendered = false;
// const renderApp = () => {
//   if (!hasRendered) {
//     ReactDOM.render(jsx, appElement);
//     hasRendered = true;
//   }
// };
//
//ReactDOM.render(<LoadingPage />, appElement);
//
// firebase.auth().onAuthStateChanged((user) => {
//   if (user) {
//     store.dispatch(login(user.uid));
//     renderApp();
//     if (history.location.pathname === "/") {
//       history.push("/dashboard");
//     }
//   } else {
//     store.dispatch(logout());
//     renderApp();
//     history.push("/");
//   }
// });
