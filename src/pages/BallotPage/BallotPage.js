import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../../services/firebase/firebase";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import MovieList from "./components/BallotMovieList";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

const BallotPage = ({ appElement }) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  return (
    <div className="content-container">
      <MovieList />
      <div className="container--flex-row">
        <button className="button">Submit Ballot</button>
        <button
          className="button button--secondary"
          onClick={() => setConfirmationModalOpen(true)}
          //disabled={movies.length < 1}
        >
          Start Over
        </button>
      </div>
      <ConfirmationModal
        appElement={appElement}
        isOpen={isConfirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        onConfirm={() => {
          //clearMovieList();
          setConfirmationModalOpen(false);
        }}
      />
    </div>
  );
};

export default BallotPage;
