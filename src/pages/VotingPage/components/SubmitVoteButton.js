import React, { useCallback } from "react";
import Button from "../../../components/Button/Button";
import { useDataSubmitContext, useVoteContext } from "./VoteContext";
import { pushVote as pushVoteApi } from "../../../services/server/api";
import { useParams } from "react-router-dom";
import {
  SUBMIT_FAILURE,
  SUBMIT_REQUEST,
  SUBMIT_SUCCESS,
} from "./dataSubmitReducer";
import Loader from "../../../components/Loader/Loader";

const useSubmitVote = () => {
  const { id } = useParams();
  const { user, movies } = useVoteContext();
  const { state, dispatch } = useDataSubmitContext();
  const canVote = Object.values(movies).find((value) => !!value) && !!user;
  const pushVote = useCallback(() => {
    dispatch({ type: SUBMIT_REQUEST });
    pushVoteApi(id, user, movies)
      .then(() => dispatch({ type: SUBMIT_SUCCESS }))
      .catch(() => dispatch({ type: SUBMIT_FAILURE }));
  }, [id, user, movies]);
  return { canVote, pushVote, isSubmitting: state.isSubmitting };
};

const SubmitVoteButton = () => {
  const { canVote, pushVote, isSubmitting } = useSubmitVote();

  return (
    <Button disabled={!canVote} onClick={pushVote}>
      {isSubmitting ? <Loader /> : "Submit Vote"}
    </Button>
  );
};

export default SubmitVoteButton;
