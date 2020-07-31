import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ResultsContext, { defaultState } from "./components/ResultsContext";
import { getBallot } from "../../services/server/api";

const useBallot = (ballotId) => {
  const [ballot, setBallot] = useState(defaultState);
  useEffect(() => {
    getBallot(ballotId).then((ballot) => {
      setBallot(ballot);
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
