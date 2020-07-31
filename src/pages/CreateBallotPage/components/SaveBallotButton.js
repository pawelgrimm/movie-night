import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SAVE_BALLOT_SUCCESS,
  saveBallot,
} from "../../../services/ballot/actions";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";
import { useNewBallot } from "./NewBallotContext";

const useSaveBallot = () => {
  const dispatch = useDispatch();
  const isSaving = useSelector(({ ballot }) => ballot.isSaving);
  const { setNewBallotId } = useNewBallot();
  const saveBallotCallback = useCallback(
    () =>
      dispatch(saveBallot()).then((action) => {
        if (action.type === SAVE_BALLOT_SUCCESS) {
          setNewBallotId(action.id);
        }
      }),
    []
  );
  return { isSaving, saveBallot: saveBallotCallback };
};

const SaveBallotButton = () => {
  const { isSaving, saveBallot } = useSaveBallot();
  return (
    <Button onClick={saveBallot}>
      {isSaving ? <Loader /> : "Save Ballot"}
    </Button>
  );
};

export default SaveBallotButton;
