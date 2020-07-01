import React from "react";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import VideoModal from "./VideoModal";

export const DashboardPage = ({ appElement }) => {
  return (
    <div className="content-container">
      <MovieSearch numResults={5} />
      <MovieList />
      <VideoModal appElement={appElement} />
    </div>
  );
};

export default DashboardPage;
