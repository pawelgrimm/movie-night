import React, { useEffect } from "react";
import { connect } from "react-redux";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import { setMovies } from "../actions/movie";

const mapStateToProps = ({ movies }) => ({
  movies,
});

export const DashboardPage = () => {
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(savedMovies);
  }, []);

  return (
    <div className="content-container">
      <MovieSearch numResults={5} />
      <MovieList />
    </div>
  );
};

export default connect(mapStateToProps)(DashboardPage);
