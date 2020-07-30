import React, { useContext } from "react";
import InfoCard from "../../../components/InfoCard/InfoCard";
import ResultContext from "./ResultsContext";
import VoterInfo from "./VoterInfo";
import InviteVoters from "./InviteVoters/InviteVoters";

const DashboardInfoCard = () => {
  return (
    <InfoCard title="Dashboard">
      <p>You can use this page to monitor results and edit the ballot.</p>
      <InviteVoters />
      <VoterInfo />
      <p>
        Click the End Voting button to conclude the election. In the event of a
        tie, a winner will be selected randomly.
      </p>
    </InfoCard>
  );
};

export default DashboardInfoCard;
