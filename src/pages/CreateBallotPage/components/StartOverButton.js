import React, { useCallback, useContext } from "react";
import Button from "../../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearBallot as clearBallotAction } from "../../../services/ballot/actions";
import StartOverModal from "../../../containers/Modal/components/StartOverModal";
import { useModal } from "../../../containers/Modal/ModalContext";

const StartOverButton = () => {
  const moviesLength = useSelector(({ ballot }) => ballot.movies?.length || 0);
  const dispatch = useDispatch();
  const clearBallot = useCallback(() => dispatch(clearBallotAction()), [
    dispatch,
  ]);
  const { openModal } = useModal();
  const openClearBallotModal = useCallback(
    () => openModal(<StartOverModal onConfirm={clearBallot} />),
    [clearBallot]
  );

  return (
    <Button
      type="secondary"
      onClick={openClearBallotModal}
      disabled={moviesLength < 1}
    >
      Start Over
    </Button>
  );
};

export default StartOverButton;
