import { ThumbsDown, ThumbsUp } from "react-feather";
import React from "react";
import Button from "../../../components/Button/Button";

const VoteNayButton = ({ id, buttonState, onClick }) => {
  return (
    <Button
      type={buttonState !== "nay" && "secondary"}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <ThumbsDown />
    </Button>
  );
};

export default VoteNayButton;
