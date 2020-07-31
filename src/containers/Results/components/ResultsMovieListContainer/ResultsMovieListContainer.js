import React from "react";
import MovieList from "../../../../components/MovieList/MovieList";
import { useBallot } from "../ResultsContext";
import MovieResultsSummary from "../MovieResultsSummary/MovieResultsSummary";

export const ResultsMovieListContainer = () => {
  const { movies } = useBallot();

  return (
    <MovieList
      movieIds={movies}
      renderExpandedItems={() => {}}
      renderCollapsedItems={(id) => <MovieResultsSummary id={id} />}
    />
  );
};

export default ResultsMovieListContainer;
