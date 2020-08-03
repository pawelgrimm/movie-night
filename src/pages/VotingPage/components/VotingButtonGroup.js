import React, { useCallback, useContext, useState } from "react";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import VoteYayButton from "./VoteYayButton";
import VoteNayButton from "./VoteNayButton";
import { VoteContext } from "./VoteContext";

const useVotingState = (id) => {
  const { movies, setYay: setYayUnbound, setNay: setNayUnbound } = useContext(
    VoteContext
  );
  const setYay = useCallback(() => setYayUnbound(id), [id]);
  const setNay = useCallback(() => setNayUnbound(id), [id]);
  const buttonState = movies[id];
  return { buttonState, setYay, setNay };
};

const VotingButtonGroup = ({ id }) => {
  const { buttonState, setYay, setNay } = useVotingState(id);
  return (
    <>
      <VoteYayButton buttonState={buttonState} onClick={setYay} />
      <VoteNayButton buttonState={buttonState} onClick={setNay} />
    </>
  );
};

export default VotingButtonGroup;
