import React from "react";
import assembleClasses from "classnames";

const Button = ({ type, children, className: propClassName, ...restProps }) => {
  const classes = assembleClasses(
    "button",
    {
      "button--secondary": type === "secondary",
    },
    propClassName
  );
  return (
    <button className={classes} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
