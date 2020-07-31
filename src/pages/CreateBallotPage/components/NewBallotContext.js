import React, { useContext } from "react";
import { pushBallot } from "../../../services/server/api";

export const defaultState = {
  newBallotId: null,
  setNewBallotId: () => {},
};

export const useNewBallot = () => {
  return useContext(NewBallotContext);
};

const NewBallotContext = React.createContext(null);

export default NewBallotContext;
