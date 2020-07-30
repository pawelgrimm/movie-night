import React from "react";
import MovieList from "../../../../components/MovieList/MovieList";
import { useResults } from "../../../../pages/DashboardPage/components/ResultsContext";
import MovieResultsSummary from "./MovieResultsSummary";

export const ResultsMovieListContainer = () => {
  const { movies } = useResults();

  return (
    <MovieList
      movieIds={movies}
      renderExpandedItems={() => {}}
      renderCollapsedItems={(id) => <MovieResultsSummary id={id} />}
    />
  );
};

export default ResultsMovieListContainer;
