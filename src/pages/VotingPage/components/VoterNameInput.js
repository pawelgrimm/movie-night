import React from "react";
import { useVoteContext } from "./VoteContext";
import TextInput from "../../../components/TextInput/TextInput";

const VoterNameInput = () => {
  const { user, setUser } = useVoteContext();

  return (
    <TextInput
      placeholder="Enter your name"
      value={user}
      onChange={(event) => setUser(event.target.value)}
    />
  );
};

export default VoterNameInput;
