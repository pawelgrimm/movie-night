import React from "react";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";

export const DashboardPage = () => {
  return (
    <div className="content-container">
      <MovieSearch numResults={5} />
      <MovieList />
    </div>
  );
};

export default DashboardPage;
