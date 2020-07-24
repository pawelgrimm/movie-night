import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MovieSearch from "../../containers/MovieSearch/MovieSearch";
import MovieList from "./components/NominationMovieList";
import VideoModal from "../../containers/VideoModal/VideoModal";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import { setMovies } from "../../services/movie/actions";
import { clearBallot, saveBallot } from "../../services/ballot/actions";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";

const mapStateToProps = ({ ballot }) => ({
  movies: ballot.movies,
  isSavingBallot: ballot.isSaving,
  newBallot: ballot.id,
});

const mapDispatchToProps = (dispatch) => ({
  clearBallot: () => dispatch(clearBallot()),
  saveBallot: () => dispatch(saveBallot()),
});

export const NominationPage = ({
  appElement,
  clearBallot,
  movies = [],
  isSavingBallot,
  newBallot,
  saveBallot,
  history,
}) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  useEffect(() => {
    if (newBallot) {
      clearBallot();
      history.push(`ballot/${newBallot}`);
    }
  }, [newBallot]);

  return (
    <div className="content-container">
      <MovieSearch numResults={5} />
      {newBallot && (
        <div>
          Go to {window.location.href + `/ballot/${newBallot} to vote!`}
        </div>
      )}
      {movies.length > 0 ? <MovieList /> : <WelcomeMessage />}
      <div className="container--flex-row">
        <button
          className="button"
          onClick={() => {
            saveBallot();
          }}
        >
          {isSavingBallot ? "Saving..." : "Next (Voting)"}
        </button>
        <button
          className="button button--secondary"
          onClick={() => setConfirmationModalOpen(true)}
          disabled={movies.length < 1}
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
          clearBallot();
          setConfirmationModalOpen(false);
        }}
      />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NominationPage);
