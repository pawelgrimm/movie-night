import React from "react";
import { connect } from "react-redux";
import { saveBallot } from "../../../services/ballot/actions";
import Button from "../../../components/Button/Button";
import Loader from "../../../components/Loader/Loader";

const mapStateToProps = ({ ballot }) => ({
  isSaving: ballot.isSaving,
});

const mapDispatchToProps = (dispatch) => ({
  saveBallot: () => dispatch(saveBallot()),
});

export const SaveBallotButton = ({ isSaving, saveBallot }) => {
  return (
    <Button onClick={saveBallot}>
      {isSaving ? <Loader /> : "Save Ballot"}
    </Button>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveBallotButton);
