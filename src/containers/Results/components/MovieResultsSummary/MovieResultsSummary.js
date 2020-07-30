import React from "react";
import { useResults } from "../../../../pages/DashboardPage/components/ResultsContext";

const MovieResultsSummary = ({ id }) => {
  const { results } = useResults();

  const { yay, nay } = results.movies[id];
  return (
    <div>
      <p>Votes for: {yay}</p>
      <p>Votes against: {nay}</p>
    </div>
  );
};

export default MovieResultsSummary;
