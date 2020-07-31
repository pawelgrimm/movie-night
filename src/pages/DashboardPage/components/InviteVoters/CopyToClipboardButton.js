import Button from "../../../../components/Button/Button";
import React from "react";

function CopyToClipboardButton({ value }) {
  const copyToClipboard = (event) => {
    event.stopPropagation();
    event.target.select();
    document.execCommand("copy");
  };

  return (
    <>
      <Button className="invite-voters__button" onClick={copyToClipboard}>
        <textarea
          id="text-to-copy"
          value={value}
          readOnly={true}
          tabIndex={-1}
          onClick={copyToClipboard}
          rows={1}
          cols={value.length / 2}
        />
      </Button>
      <p>(click to copy to clipboard)</p>
    </>
  );
}

export default CopyToClipboardButton;
