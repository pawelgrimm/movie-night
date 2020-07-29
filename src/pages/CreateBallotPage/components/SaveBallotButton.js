import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveBallot } from "../../../services/ballot/actions";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";

const useSaveBallot = () => {
  const dispatch = useDispatch();
  const isSaving = useSelector(({ ballot }) => ballot.isSaving);
  const saveBallotCallback = useCallback(() => dispatch(saveBallot()), []);
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
