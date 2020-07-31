import React, { useCallback } from "react";
import Button from "../../../components/Button/Button";
import StartOverModal from "../../../containers/Modal/components/StartOverModal";
import { useModal } from "../../../containers/Modal/ModalContext";

const StartOverButton = () => {
  const clearBallot = () => {};
  const { openModal } = useModal();
  const openClearVoteModal = useCallback(
    () => openModal(<StartOverModal onConfirm={clearBallot} />),
    [clearBallot]
  );

  return (
    <Button type="secondary" onClick={openClearVoteModal} disabled>
      Start Over
    </Button>
  );
};

export default StartOverButton;
