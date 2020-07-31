import React from "react";
import MovieListItem from "../../../containers/MovieListItem/MovieListItem";

const ResultsInfoWinner = ({ id }) => {
  return (
    <>
      <p>The results are in and the winner is...</p>
      <MovieListItem id={id} />
    </>
  );
};

export default ResultsInfoWinner;
