import React, { useState } from "react";
import NewBallotContext from "./NewBallotContext";

const NewBallotProvider = ({ children }) => {
  const [newBallotId, setNewBallotId] = useState(null);
  return (
    <NewBallotContext.Provider value={{ newBallotId, setNewBallotId }}>
      {children}
    </NewBallotContext.Provider>
  );
};

export default NewBallotProvider;
