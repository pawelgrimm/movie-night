import React from "react";
import InfoCard from "../../../components/InfoCard/InfoCard";
import VoterInfo from "../../../containers/Results/components/VoterInfo";
import { useWinner } from "../../../containers/Results/components/ResultsContext";
import MovieListItem from "../../../containers/MovieListItem/MovieListItem";
import ResultsInfoWinner from "./ResultsInfoWinner";

const ResultsInfo = () => {
  const winner = useWinner();
  return (
    <InfoCard title="Results">
      {winner ? (
        <ResultsInfoWinner id={winner} />
      ) : (
        <p>
          The vote is still in progress, but you can use this page to view the
          current results.
        </p>
      )}
      <VoterInfo />
    </InfoCard>
  );
};

export default ResultsInfo;
