import React from "react";
import MovieList from "../../components/MovieList/MovieList";
import { useSelector } from "react-redux";
import RemoveMovieFromBallotButton from "./components/RemoveMovieFromBallotButton";

const CreateBallotMovieListContainer = () => {
  const movies = useSelector(({ ballot }) => ballot.movies);

  return (
    <MovieList
      movieIds={movies}
      renderExpandedItems={(id) => <RemoveMovieFromBallotButton id={id} />}
      renderCollapsedItems={(id) => (
        <RemoveMovieFromBallotButton id={id} type={"icon"} />
      )}
    />
  );
};

export default CreateBallotMovieListContainer;
