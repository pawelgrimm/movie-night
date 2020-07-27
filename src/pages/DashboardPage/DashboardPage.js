import React from "react";
import { useParams } from "react-router-dom";
import AppPage from "../../components/AppPage/AppPage";
import InfoCard from "../../components/InfoCard/InfoCard";
import Loader from "../../components/Loader/Loader";

const DashboardPage = () => {
  const { id } = useParams();
  return (
    <AppPage>
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
          Click the End Voting button to conclude the election. In the event of
          a tie, a winner will be selected randomly.
        </p>
      </InfoCard>
      <div className="button-group">
        <button className="button" onClick={() => {}}>
          End Voting
        </button>
        <button className="button button--secondary" onClick={() => {}}>
          Edit
        </button>
      </div>

      {
        // Movie List goes here
      }
    </AppPage>
  );
};

export default DashboardPage;
