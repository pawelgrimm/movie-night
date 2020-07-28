import ConfirmModal from "../../../containers/Modal/components/ConfirmModal";
import React from "react";

const StartOverModal = ({ onConfirm }) => {
  return (
    <ConfirmModal
      title="Start Over"
      message="This action is not reversible. Are you sure you want to
        continue?"
      onConfirm={onConfirm}
    />
  );
};

export default StartOverModal;
