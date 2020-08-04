import React, { useCallback } from "react";
import { useParams } from "react-router-dom";
import { endVoting } from "../../../services/server/api";
import { useRequestRefresh } from "../../../containers/Results/components/ResultsContext";

const useEndVoting = () => {
  const { id } = useParams();
  const requestRefresh = useRequestRefresh();
  return useCallback(() => endVoting(id).then(() => requestRefresh()), [id]);
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
