import React, { useReducer, useState } from "react";
import { VoteContext } from "./VoteContext";
import dataSubmitReducer from "./dataSubmitReducer";

const useSetupVoteContext = () => {
  const [user, setUser] = useState("");
  const [movies, setMovies] = useState({});
  const [state, dispatch] = useReducer(dataSubmitReducer, {
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const setMovie = (id, value) => {
    setMovies((prevState) => {
      let newValue = value;
      if (prevState[id] === value) {
        newValue = null;
      }
      return { ...prevState, [id]: newValue };
    });
  };
  const setYay = (id) => {
    setMovie(id, "yay");
  };
  const setNay = (id) => {
    setMovie(id, "nay");
  };

  return {
    user,
    setUser,
    movies,
    setYay,
    setNay,
    dataSubmit: { state, dispatch },
  };
};

const VoteProvider = ({ children }) => {
  const initialValue = useSetupVoteContext();
  return (
    <VoteContext.Provider value={initialValue}>{children}</VoteContext.Provider>
  );
};

export default VoteProvider;
