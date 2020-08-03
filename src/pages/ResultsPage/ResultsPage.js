import React from "react";
import AppPage from "../../components/AppPage/AppPage";
import ResultsMovieListContainer from "../../containers/Results/components/ResultsMovieListContainer/ResultsMovieListContainer";
import ResultsProvider from "../../containers/Results/ResultsProvider";
import ResultsInfo from "./components/ResultsInfo";
import ResultsPageContainer from "./ResultsPageContainer";

const ResultsPage = () => {
  return (
    <ResultsProvider>
      <AppPage>
        <ResultsPageContainer>
          <ResultsInfo />
          <ResultsMovieListContainer />
        </ResultsPageContainer>
      </AppPage>
    </ResultsProvider>
  );
};

export default ResultsPage;
