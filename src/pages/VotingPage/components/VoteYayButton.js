import React from "react";
import { ThumbsUp } from "react-feather";
import Button from "../../../components/Button/Button";

const VoteYayButton = ({ id, buttonState, onClick }) => {
  return (
    <Button
      type={buttonState !== "yay" && "secondary"}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <ThumbsUp />
    </Button>
  );
};

export default VoteYayButton;
