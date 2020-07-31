import React from "react";
import { useWinner } from "../../../containers/Results/components/ResultsContext";
import { Redirect, useParams } from "react-router";

const DashboardPageContainer = ({ children }) => {
  const hasWinner = useWinner();
  const { id } = useParams();
  if (hasWinner) {
    return <Redirect to={`/results/${id}`} />;
  }
  return <>{children}</>;
};

export default DashboardPageContainer;
