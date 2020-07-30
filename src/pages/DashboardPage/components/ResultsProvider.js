import React, { useEffect, useState } from "react";
import ResultsContext, { defaultState } from "./ResultsContext";
import { useParams } from "react-router";
import axios from "axios";
import Loader from "../../../components/Loader/Loader";

const useBallot = (ballotId) => {
  const [ballot, setBallot] = useState(defaultState);
  useEffect(() => {
    axios.get(`/api/ballot/${ballotId}`).then((res) => {
      setBallot(res.data.ballot);
    });
  }, []);
  return ballot;
};

const ResultsProvider = ({ children }) => {
  const { id: ballotId } = useParams();
  const ballot = useBallot(ballotId);
  return (
    <ResultsContext.Provider value={ballot}>{children}</ResultsContext.Provider>
  );
};

export default ResultsProvider;
