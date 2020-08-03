import React, { useCallback, useState } from "react";
import ButtonGroup from "../../../components/ButtonGroup/ButtonGroup";
import VoteYayButton from "./VoteYayButton";
import VoteNayButton from "./VoteNayButton";

const useVotingState = () => {
  const [buttonState, setButtonState] = useState(null);
  const setYay = () => setButtonState(buttonState !== "yay" ? "yay" : null);
  const setNay = () => setButtonState(buttonState !== "nay" ? "nay" : null);
  return { buttonState, setYay, setNay };
};

const VotingButtonGroup = ({ id }) => {
  const { buttonState, setYay, setNay } = useVotingState();
  return (
    <>
      <VoteYayButton buttonState={buttonState} onClick={setYay} />
      <VoteNayButton buttonState={buttonState} onClick={setNay} />
    </>
  );
};

export default VotingButtonGroup;
