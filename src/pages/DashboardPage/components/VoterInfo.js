import React from "react";
import { useResults } from "./ResultsContext";
import Loader from "../../../components/Loader/Loader";

const useBallotVoters = () => {
  const { results = {} } = useResults();
  return results.users || [];
};

const VoterInfo = ({ text = "These people have voted:" }) => {
  const voters = useBallotVoters();
  if (voters.length === 0) {
    return <Loader />;
  }
  return (
    <>
      <p>{text}</p>
      <ul>
        {voters.map((voter, index) => (
          <li key={index}>{voter}</li>
        ))}
      </ul>
    </>
  );
};

export default VoterInfo;
