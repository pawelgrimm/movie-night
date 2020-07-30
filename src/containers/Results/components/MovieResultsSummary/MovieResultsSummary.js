import React, { useMemo } from "react";
import { useResults } from "../../../../pages/DashboardPage/components/ResultsContext";
import { ThumbsUp, ThumbsDown } from "react-feather";

const useYayOrNay = (id) => {
  const { results } = useResults();
  return useMemo(() => {
    if (!results.movies.hasOwnProperty(id)) {
      return { yay: 0, nay: 0 };
    }
    return {
      yay: results.movies[id].yay || 0,
      nay: results.movies[id].yay || 0,
    };
  }, [results]);
};

const MovieResultsSummary = ({ id }) => {
  const { yay, nay } = useYayOrNay(id);
  return (
    <table className="movie-results-summary">
      <tr>
        <td className="movie-results-summary__icon--yay">
          <ThumbsUp />
        </td>
        <td className="movie-results-summary__count--yay">{yay}</td>
      </tr>
      <tr>
        <td className="movie-results-summary__icon--nay">
          <ThumbsDown />
        </td>
        <td className="movie-results-summary__count--nay">{nay}</td>
      </tr>
    </table>
  );
};

export default MovieResultsSummary;
