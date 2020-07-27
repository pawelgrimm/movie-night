import React from "react";
import classNames from "classnames";

const Button = ({ type, children }) => {
  return (
    <button
      className={classNames("button", {
        "button--secondary": type === "secondary",
      })}
    >
      {children}
    </button>
  );
};

export default Button;
