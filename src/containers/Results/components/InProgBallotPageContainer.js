import React from "react";
import { useResultsContext, useWinner } from "./ResultsContext";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";
import RedirectToResultsPage from "./RedirectToResultsPage";

const InProgBallotPageContainer = ({ children }) => {
  const { id } = useParams();
  const hasWinner = useWinner();
  const { isLoading, isError } = useResultsContext();

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return <NotFoundPage />;
  } else if (hasWinner) {
    return <RedirectToResultsPage id={id} />;
  } else {
    return <>{children}</>;
  }
};

export default InProgBallotPageContainer;
