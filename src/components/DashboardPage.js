import React, { useReducer } from "react";
import MovieContext from "../context/movie-context";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import movieReducer from "../reducers/movie";

const DashboardPage = () => {
  const [movies, dispatch] = useReducer(movieReducer, []);

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
