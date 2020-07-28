import React from "react";
import { useHistory, useParams } from "react-router";
import Button from "../../../components/Button/Button";

const EditBallotButton = () => {
  const history = useHistory();

  const navigateToEditBallotPage = () => {
    const { id } = useParams();
    history.push(`/edit-ballot/${id}`);
  };

  return (
    <Button type="secondary" onClick={navigateToEditBallotPage}>
      Edit
    </Button>
  );
};

export default EditBallotButton;
