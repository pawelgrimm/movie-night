import React, { useContext } from "react";

export const defaultState = {
  user: "",
  setUser: () => {},
  movies: {},
  setYay: () => {},
  setNay: () => {},
  dataSubmit: {
    state: {
      isSubmitting: false,
      isSuccess: false,
      isError: false,
    },
    dispatch: () => {},
  },
};

export const VoteContext = React.createContext(defaultState);

export const useVoteContext = () => {
  return useContext(VoteContext);
};

export const useDataSubmitContext = () => {
  return useVoteContext()?.dataSubmit;
};
