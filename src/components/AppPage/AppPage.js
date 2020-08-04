import React from "react";

const AppPage = ({ children }) => {
  return (
    <div className="content-container container--flex-col main-content">
      {children}
    </div>
  );
};
export default AppPage;
