import React from "react";
import classNames from "classnames";

const TextInput = ({
  className,
  containerRef,
  searchRef,
  overrideStyle,
  ...rest
}) => {
  const styles = overrideStyle
    ? className
    : classNames("card text-input text-input--grow", className);
  return (
    <div className="container--flex-col" ref={containerRef}>
      <input className={styles} ref={searchRef} {...rest} />
    </div>
  );
};

export default TextInput;
