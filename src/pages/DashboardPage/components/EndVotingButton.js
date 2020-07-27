import { useParams } from "react-router-dom";
import React from "react";

const EndVotingButton = (props) => {
  const { id } = useParams();
  return (
    <button className="button" onClick={props.onClick}>
      End Voting
    </button>
  );
};

export default EndVotingButton;
