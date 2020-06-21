import React, { useState } from "react";
import MovieSearch from "./MovieSearch";
import MovieList from "./MovieList";
import VideoModal from "./VideoModal";

export const DashboardPage = ({ appElement }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    console.log("toggleModal called. modalIsOpen =", modalIsOpen);
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <div className="content-container">
      <MovieSearch numResults={5} />
      <MovieList toggleModal={toggleModal} />
      <VideoModal
        modalIsOpen={modalIsOpen}
        toggleModal={toggleModal}
        appElement={appElement}
      />
    </div>
  );
};

export default DashboardPage;
