import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import Button from "../../../../components/Button/Button";

function CopyToClipboardButton({ value }) {
  const copyToClipboard = (event) => {
    event.stopPropagation();
    event.target.select();
    document.execCommand("copy");
  };

  return (
    <>
      <Button className="invite-voters__button" onClick={copyToClipboard}>
        <TextareaAutosize
          id="text-to-copy"
          value={value}
          readOnly={true}
          tabIndex={-1}
          onClick={copyToClipboard}
        />
      </Button>
      <p>(click to copy to clipboard)</p>
    </>
  );
}

export default CopyToClipboardButton;
