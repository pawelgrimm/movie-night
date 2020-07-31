import React, { useContext } from "react";

export const defaultState = {
  movies: [],
  owner: null,
  winner: null,
  results: {
    users: [],
    movies: {},
  },
};

const ResultsContext = React.createContext(defaultState);

export const useBallot = () => {
  return useContext(ResultsContext);
};

export const useResults = () => {
  return useBallot().results || defaultState.results;
};

export const useWinner = () => {
  return useBallot().winner;
};

export const useBallotVoters = () => {
  const { users } = useResults();
  return users;
};

export default ResultsContext;
