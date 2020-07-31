import React from "react";
import { useResults } from "./ResultsContext";
import Loader from "../../../components/Loader/Loader";

const useBallotVoters = () => {
  const { results = {} } = useResults();
  return results.users;
};

const VoterInfo = ({
  text = "These people have voted:",
  noResultsText = "No one has voted on this Movie Night yet!",
}) => {
  const voters = useBallotVoters();

  if (!voters) {
    return <Loader />;
  }

  if (voters.length === 0) {
    return <p>{noResultsText}</p>;
  }
  return (
    <>
      <p>{text}</p>
      <ul className="dashed-list">
        {voters.map((voter, index) => (
          <li key={index}>{voter}</li>
        ))}
      </ul>
    </>
  );
};

export default VoterInfo;
