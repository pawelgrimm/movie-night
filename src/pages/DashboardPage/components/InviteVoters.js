import React from "react";
import Button from "../../../components/Button/Button";

function InviteVoters() {
  return (
    <div>
      <p>To invite voters, send them this link:</p>
      <Button>bit.ly/12345</Button>
      <p>(click to copy to clipboard)</p>
    </div>
  );
}

export default InviteVoters;
