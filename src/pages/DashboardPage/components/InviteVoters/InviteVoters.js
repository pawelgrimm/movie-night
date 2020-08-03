import React from "react";
import CopyToClipboardButton from "./CopyToClipboardButton";
import { useParams } from "react-router";

function InviteVoters() {
  const origin = window.location.origin;
  const { id } = useParams();
  return (
    <div className="invite-voters">
      <p>To invite voters, send them this link:</p>
      <CopyToClipboardButton value={`${origin}/vote/${id}`} />
    </div>
  );
}

export default InviteVoters;
