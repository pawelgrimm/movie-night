import React, { useContext } from "react";
import ResultsContext from "../../containers/Results/components/ResultsContext";
import Loader from "../../components/Loader/Loader";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const ResultsPageContainer = ({ children }) => {
  const { isLoading, isError } = useContext(ResultsContext);

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return <NotFoundPage />;
  } else {
    return <>{children}</>;
  }
};

export default ResultsPageContainer;
