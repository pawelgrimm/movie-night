import React from "react";
import { useParams } from "react-router-dom";
import AppPage from "../../components/AppPage/AppPage";
import DashboardInfoCard from "./components/DashboardInfo";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import InfoCard from "../../components/InfoCard/InfoCard";
import Loader from "../../components/Loader/Loader";

const DashboardPage = () => {
  const { id } = useParams();

  return (
    <AppPage>
      <DashboardInfoCard />
      <ButtonGroup>
        <button className="button" onClick={() => {}}>
          End Voting
        </button>
        <button className="button button--secondary" onClick={() => {}}>
          Edit
        </button>
      </ButtonGroup>

      {
        // Movie List goes here
      }
    </AppPage>
  );
};

export default DashboardPage;
