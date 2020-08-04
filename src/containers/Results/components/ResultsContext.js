import React, { useContext } from "react";

export const defaultState = {
  data: {
    movies: [],
    owner: null,
    winner: null,
    results: {
      users: [],
      movies: {},
    },
  },
  isLoading: true,
  isError: false,
  requestRefresh: () => {},
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
  return useBallot()?.winner;
};

export const useVoters = () => {
  return useResults()?.users;
};

export const useVotes = () => {
  return useResults()?.movies;
};

export const useRequestRefresh = () => {
  return useResultsContext().requestRefresh;
};

export default ResultsContext;
