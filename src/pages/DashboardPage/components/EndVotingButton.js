import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { endVoting } from "../../../services/server/api";

const useEndVoting = () => {
  const { id } = useParams();
  return useCallback(() => endVoting(id), [id]);
};

const EndVotingButton = () => {
  const endVoting = useEndVoting();

  return (
    <button className="button" onClick={endVoting}>
      End Voting
    </button>
  );
};

export default EndVotingButton;
