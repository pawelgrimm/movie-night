import React from "react";
import classNames from "classnames";

const TextInput = ({ className, ...rest }) => {
  return (
    <div className="container--flex-col">
      <input
        className={classNames("card text-input text-input--grow", className)}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
