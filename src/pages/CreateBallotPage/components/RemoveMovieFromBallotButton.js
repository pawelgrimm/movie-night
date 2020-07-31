import React, { useCallback } from "react";
import Button from "../../../components/Button/Button";
import { Trash2 as TrashIcon } from "react-feather";
import { useDispatch } from "react-redux";
import { removeMovie } from "../../../services/ballot/actions";

const useRemoveMovie = (id) => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(removeMovie(id));
  }, [id]);
};

const RemoveMovieFromBallotButton = ({ id, type }) => {
  const removeMovie = useRemoveMovie(id);
  return (
    <Button
      className={type === "icon" && "movie-item__button--small"}
      type="secondary"
      onClick={(event) => {
        event.stopPropagation();
        removeMovie();
      }}
    >
      {type === "icon" ? <TrashIcon /> : "Remove Movie"}
    </Button>
  );
};

export default RemoveMovieFromBallotButton;
