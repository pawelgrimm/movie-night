import React, { useMemo } from "react";
import { useBallot, useVotes } from "../ResultsContext";
import { ThumbsUp, ThumbsDown } from "react-feather";

const useYayOrNay = (id) => {
  const movies = useVotes();
  return useMemo(() => {
    return {
      yay: movies[id]?.yay || 0,
      nay: movies[id]?.nay || 0,
    };
  }, [movies]);
};

const MovieResultsSummary = ({ id }) => {
  const { yay, nay } = useYayOrNay(id);
  return (
    <table className="movie-results-summary">
      <tbody>
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
      </tbody>
    </table>
  );
};

export default MovieResultsSummary;
