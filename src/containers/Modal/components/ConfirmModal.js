import React from "react";
import CloseModalButton from "./CloseModalButton";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import ConfirmModalButton from "./ConfirmModalButton";

export const ConfirmModal = ({ title, message, onConfirm }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{message}</p>
      <ButtonGroup>
        <ConfirmModalButton text="Continue" onConfirm={onConfirm} />
        <CloseModalButton text="Cancel" />
      </ButtonGroup>
    </>
  );
};

export default ConfirmModal;
