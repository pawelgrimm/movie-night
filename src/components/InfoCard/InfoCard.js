import React from "react";

const InfoCard = ({ title, children }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default InfoCard;
