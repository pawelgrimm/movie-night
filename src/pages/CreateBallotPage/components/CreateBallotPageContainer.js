import React from "react";
import { useNewBallot } from "./NewBallotContext";
import { Redirect } from "react-router-dom";

const CreateBallotPageContainer = ({ children }) => {
  const { newBallotId } = useNewBallot();
  if (newBallotId) {
    return <Redirect push to={`dashboard/${newBallotId}`} />;
  }

  return <>{children}</>;
};

export default CreateBallotPageContainer;
