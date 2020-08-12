import React, { useState } from "react";
import { useMovie } from "../../../containers/MovieListItem/MovieListItem";
import MovieListItemExpanded from "../../../containers/MovieListItem/components/MovieListItemExpanded";
import Loader from "../../../components/Loader/Loader";
import OutsideClickHandler from "react-outside-click-handler";
import ExpandedItem from "../../../containers/MovieListItem/components/MovieListItemExpanded";

const ResultsInfoWinner = ({ id }) => {
  const [movie, setMovie] = useState(null);
  useMovie(id, setMovie);

  return !movie ? (
    <Loader />
  ) : (
    <>
      <p>The results are in and the winner is...</p>
      <ExpandedItem
        id={id}
        movie={movie.info}
        onClick={() => {}}
        autoScroll="false"
      />
    </>
  );
};

export default ResultsInfoWinner;
