import React from "react";
import MovieList from "../../../components/MovieList/MovieList";
import { useBallot } from "../../../containers/Results/components/ResultsContext";
import VotingButtonGroup from "./VotingButtonGroup";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";

const VotingMovieListContainer = () => {
  const { movies } = useBallot();

  return (
    <MovieList
      movieIds={movies}
      renderExpandedItems={(id) => <VotingButtonGroup id={id} />}
      renderCollapsedItems={(id) => (
        <ButtonGroup>
          <VotingButtonGroup id={id} />
        </ButtonGroup>
      )}
    />
  );
};

export default VotingMovieListContainer;
