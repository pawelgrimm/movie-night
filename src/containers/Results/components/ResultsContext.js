import React, { useContext } from "react";

export const defaultState = {
  data: {
    movies: [],
    owner: null,
    results: {
      winner: null,
      users: [],
      movies: {},
    },
  },
  isLoading: true,
  isError: false,
};

const ResultsContext = React.createContext(defaultState);

export const useResultsContext = () => {
  return useContext(ResultsContext);
};

export const useBallot = () => {
  return useResultsContext()?.data;
};

export const useResults = () => {
  return useBallot()?.results;
};

export const useWinner = () => {
  return useResults()?.winner;
};

export const useVoters = () => {
  return useResults()?.users;
};

export const useVotes = () => {
  return useResults()?.movies;
};

export default ResultsContext;
