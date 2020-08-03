import React from "react";
import Loader from "../../../components/Loader/Loader";
import { useVoters } from "./ResultsContext";

const VoterInfo = ({
  text = "These people have voted:",
  noResultsText = "No one has voted on this Movie Night yet!",
}) => {
  const voters = useVoters();

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
