import React from "react";
import { Redirect } from "react-router-dom";

const RedirectToResultsPage = ({ id }) => {
  return <Redirect to={`/results/${id}`} />;
};

export default RedirectToResultsPage;
