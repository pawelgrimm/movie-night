import React from "react";
import classNames from "classnames";

const ButtonGroup = ({ children, className }) => {
  return (
    <div className={classNames("button-group", className)}>{children}</div>
  );
};

export default ButtonGroup;
