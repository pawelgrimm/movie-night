import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";

function InviteVoters() {
  return (
    <div className="invite-voters">
      <p>To invite voters, send them this link:</p>
      <CopyToClipboardButton value={"bit.ly/12345"} />
    </div>
  );
}

export default InviteVoters;
