import React, { useContext } from "react";
import MovieContext from "../context/movie-context";
import MovieListItem from "./MovieListItem";
import { useSelector } from "react-redux";

const MovieList = () => {
  const movies = useSelector(({ movies }) => movies);
  return (
    movies.length > 0 && (
      <div className="list-body">
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </div>
    )
  );
};

export default MovieList;
