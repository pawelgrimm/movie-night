import React from "react";
import InProgBallotPageContainer from "../../../containers/Results/components/InProgBallotPageContainer";
import { useDataSubmitContext } from "./VoteContext";
import RedirectToResultsPage from "../../../containers/Results/components/RedirectToResultsPage";
import { useParams } from "react-router";

const VotingPageContainer = ({ children }) => {
  const { isSuccess } = useDataSubmitContext()?.state;
  const { id } = useParams();
  if (isSuccess) {
    return <RedirectToResultsPage id={id} />;
  } else {
    return <InProgBallotPageContainer>{children}</InProgBallotPageContainer>;
  }
};

export default VotingPageContainer;
