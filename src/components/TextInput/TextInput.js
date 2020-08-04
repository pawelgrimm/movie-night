import React from "react";
import classNames from "classnames";

const TextInput = ({ className, forwardRef, ...rest }) => {
  return (
    <div className="container--flex-col">
      <input
        className={classNames("card text-input text-input--grow", className)}
        ref={forwardRef}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
