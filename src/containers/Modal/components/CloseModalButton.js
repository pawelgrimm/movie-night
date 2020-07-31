import React from "react";
import Button from "../../../components/Button/Button";
import { useModal } from "../ModalContext";

const CloseModalButton = ({ text = "Close" }) => {
  const { closeModal } = useModal();

  return (
    <Button
      type="secondary"
      className="modal__button"
      onClick={(event) => {
        event.stopPropagation();
        closeModal();
      }}
    >
      {text}
    </Button>
  );
};

export default CloseModalButton;
