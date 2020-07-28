import React, { useCallback } from "react";
import Button from "../../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { openModal as openModalAction } from "../../../containers/Modal/service/actions";
import { clearBallot as clearBallotAction } from "../../../services/ballot/actions";
import StartOverModal from "./StartOverModal";

const StartOverButton = () => {
  const movies = useSelector(({ ballot }) => ballot.movies || []);
  const dispatch = useDispatch();
  const clearBallot = useCallback(() => dispatch(clearBallotAction()), [
    dispatch,
  ]);
  const openModal = useCallback(
    () => dispatch(openModalAction(<StartOverModal onConfirm={clearBallot} />)),
    [clearBallot]
  );

  return (
    <Button type="secondary" onClick={openModal} disabled={movies.length < 1}>
      Start Over
    </Button>
  );
};

export default StartOverButton;
