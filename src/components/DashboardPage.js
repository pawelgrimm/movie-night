import React, { useEffect, useReducer } from "react";
import MovieContext from "../context/movie-context";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import movieReducer from "../reducers/movie";
import { setMovies } from "../actions/movie";

const DashboardPage = () => {
  const [movies, dispatch] = useReducer(movieReducer, []);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    dispatch(setMovies(movies));
  }, []);

  return (
    <MovieContext.Provider value={{ movies, dispatch }}>
      <div className="content-container">
        <MovieSearch numResults={5} />
        <MovieList />
      </div>
    </MovieContext.Provider>
  );
};

export default DashboardPage;
