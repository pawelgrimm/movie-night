import React from "react";
import { useHistory, useParams } from "react-router";

const EditBallotButton = () => {
  const history = useHistory();

  const navigateToEditBallotPage = () => {
    const { id } = useParams();
    history.push(`/edit-ballot/${id}`);
  };

  return (
    <button
      className="button button--secondary"
      onClick={navigateToEditBallotPage}
    >
      Edit
    </button>
  );
};

export default EditBallotButton;
