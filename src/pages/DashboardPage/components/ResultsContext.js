import React, { useContext } from "react";

export const defaultState = {
  movies: [],
  owner: undefined,
  results: {
    users: [],
    movies: {},
  },
};

const ResultsContext = React.createContext(defaultState);

export const useResults = () => {
  return useContext(ResultsContext);
};

export default ResultsContext;
