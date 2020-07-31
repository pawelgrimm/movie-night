import React, { useContext } from "react";

const defaultValue = {
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = React.createContext(defaultValue);

export const useModal = () => {
  return useContext(ModalContext);
};

export default ModalContext;
