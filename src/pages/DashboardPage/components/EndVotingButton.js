import React from "react";
import { useParams } from "react-router-dom";

const EndVotingButton = () => {
  // const { id } = useParams();
  return (
    <button className="button" disabled>
      End Voting
    </button>
  );
};

export default EndVotingButton;
