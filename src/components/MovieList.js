import React, { useContext } from "react";
import MovieContext from "../context/movie-context";
import MovieListItem from "./MovieListItem";

const MovieList = () => {
  const { movies } = useContext(MovieContext);
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
