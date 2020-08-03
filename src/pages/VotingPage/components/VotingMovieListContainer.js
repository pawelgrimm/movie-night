import React from "react";
import MovieList from "../../../components/MovieList/MovieList";
import { useResultsContext } from "../../../containers/Results/components/ResultsContext";
import VotingButtonGroup from "./VotingButtonGroup";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";

const VotingMovieListContainer = () => {
  const { movies } = useResultsContext();

  return (
    <MovieList
      movieIds={movies}
      renderExpandedItems={(id) => <VotingButtonGroup />}
      renderCollapsedItems={(id) => (
        <ButtonGroup>
          <VotingButtonGroup />
        </ButtonGroup>
      )}
    />
  );
};

export default VotingMovieListContainer;
