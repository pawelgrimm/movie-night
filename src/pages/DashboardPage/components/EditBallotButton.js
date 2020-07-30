import React, { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "../../../components/Button/Button";

const EditBallotButton = () => {
  const history = useHistory();
  const { id } = useParams();
  const navigateToEditBallotPage = useCallback(() => {
    history.push(`/edit-ballot/${id}`);
  }, [id]);

  return (
    <Button type="secondary" disabled onClick={navigateToEditBallotPage}>
      Edit
    </Button>
  );
};

export default EditBallotButton;
