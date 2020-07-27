import React from "react";
import InfoCard from "../../../components/InfoCard/InfoCard";

const DashboardInfoCard = () => {
  return (
    <InfoCard title="Dashboard">
      <p>You can use this page to monitor results and edit the ballot.</p>
      <div>
        <p>To invite voters, send them this link:</p>
        <button>bit.ly/12345</button>
        <p>(click to copy to clipboard)</p>
      </div>
      {
        // Insert voting status here
      }
      <p>
        Click the End Voting button to conclude the election. In the event of a
        tie, a winner will be selected randomly.
      </p>
    </InfoCard>
  );
};

export default DashboardInfoCard;
