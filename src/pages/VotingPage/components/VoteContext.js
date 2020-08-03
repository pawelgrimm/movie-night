import React, { useContext } from "react";

export const defaultState = {
  user: "",
  setUser: () => {},
  movies: {},
  setYay: () => {},
  setNay: () => {},
};

export const VoteContext = React.createContext(defaultState);

export const useVoteContext = () => {
  return useContext(VoteContext);
};
