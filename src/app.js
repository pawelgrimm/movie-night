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
import { setMovies } from "./actions/movie";

const appElement = document.getElementById("app");
const store = configureStore();

const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
store.dispatch(setMovies(savedMovies));

store.subscribe(() => {
  const movies = store.getState()["movies"];
  localStorage.setItem("movies", JSON.stringify(movies));
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appElement);
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, appElement);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
