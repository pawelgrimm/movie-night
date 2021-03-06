import "normalize.css/normalize.css";
import "./global/styles/styles.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./global/routes/AppRouter";
import configureStore from "./store/configureStore";
import { setBallot } from "./services/ballot/actions";
import { setMovies } from "./services/movie/actions";
import ModalProvider from "./containers/Modal/ModalProvider";

const store = configureStore();

// Set app element for modal
const appElement = document.getElementById("app");

// Load local movie db from local storage
const movies = JSON.parse(localStorage.getItem("movies")) || {};
store.dispatch(setMovies(movies));

// Load ballot from local storage
const ballotMovies = JSON.parse(localStorage.getItem("ballot/movies")) || [];
store.dispatch(setBallot(ballotMovies));

// This should no longer be necessary
// // Make sure all movies in ballot are loaded
// const fetchPromises = [];
// for (const id in movies) {
//   if (movies.hasOwnProperty(id)) {
//     fetchPromises.push(store.dispatch(fetchMovie(id)));
//   }
// }

store.subscribe(() => {
  const movies = store.getState().ballot.movies;
  localStorage.setItem("ballot/movies", JSON.stringify(movies));
  const cache = store.getState().movies;
  localStorage.setItem("movies", JSON.stringify(cache));
});

const jsx = (
  <Provider store={store}>
    <ModalProvider appElement={appElement}>
      <AppRouter appElement={appElement} />
    </ModalProvider>
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
