import React from "react";
import {
  useResultsContext,
  useWinner,
} from "../../../containers/Results/components/ResultsContext";
import { Redirect, useParams } from "react-router";
import Loader from "../../../components/Loader/Loader";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";

const DashboardPageContainer = ({ children }) => {
  const { id } = useParams();
  const hasWinner = useWinner();
  const { isLoading, isError } = useResultsContext();

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return <NotFoundPage />;
  } else if (hasWinner) {
    return <Redirect to={`/results/${id}`} />;
  } else {
    return <>{children}</>;
  }
};

export default DashboardPageContainer;
