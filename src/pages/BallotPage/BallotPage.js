import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../../services/firebase/firebase";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import LoadingPage from "../LoadingPage/LoadingPage";
import MovieList from "./components/BallotMovieList";
import VideoModal from "../../containers/VideoModal/VideoModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";

const BallotPage = ({ appElement, history }) => {
  // const { id: ballotId } = useParams();
  // const [movies, setMovies] = useState([]);
  // const [loaded, setLoaded] = useState(false);
  //
  // // Load ballot from DB
  // useEffect(() => {
  //   database;
  //   database
  //     .ref(`ballot/${ballotId}`)
  //     .once("value")
  //     .then((snapshot) => {
  //       setMovies(snapshot.val());
  //       setLoaded(true);
  //     });
  // }, []);
  //
  // if (!movies) {
  //   return <NotFoundPage />;
  // }
  // return loaded ? <BallotMovieList /> : <LoadingPage />;

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
      <VideoModal appElement={appElement} />
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
