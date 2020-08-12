import React from "react";
import classNames from "classnames";

const TextInput = ({ className, containerRef, searchRef, ...rest }) => {
  return (
    <div className="container--flex-col" ref={containerRef}>
      <input
        className={classNames("card text-input text-input--grow", className)}
        ref={searchRef}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
