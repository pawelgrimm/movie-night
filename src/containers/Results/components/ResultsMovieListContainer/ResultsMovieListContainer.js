import React, { useEffect, useState } from "react";
import { getMoviesOnBallot } from "../../services/firebase/api";
import { hydrateMovies } from "../../services/movie/api";
import { fetchMovie } from "../../services/movie/actions";
import { useParams } from "react-router";
import MovieList from "../../components/MovieList/MovieList";

const useBallotMovies = (id) => {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    getMoviesOnBallot(id).then((ref) => {
      const movies = ref.val();
      movies.forEach((id) => fetchMovie(id));
      setMovies(movies);
    });
  }, []);

  return movies;
};

export const ResultsMovieListContainer = () => {
  const { id } = useParams();
  const movies = useBallotMovies(id);

  return (
    <MovieList
      movieIds={movies}
      renderExpandedItems={() => {}}
      renderCollapsedItems={() => {}}
    />
  );
};

export default ResultsMovieListContainer;
