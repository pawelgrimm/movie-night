import React from "react";
import CloseModalButton from "./CloseModalButton";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import ConfirmModalButton from "./ConfirmModalButton";

export const ConfirmModal = ({ message, onConfirm }) => {
  return (
    <>
      <p>{message}</p>
      <ButtonGroup>
        <ConfirmModalButton onConfirm={onConfirm} />
        <CloseModalButton text="Cancel" />
      </ButtonGroup>
    </>
  );
};

export default ConfirmModal;
