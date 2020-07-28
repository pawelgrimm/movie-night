import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieSearch from "../../containers/MovieSearch/MovieSearch";
import MovieList from "./components/CreateBallotMovieList";
import ConfirmationModal from "../../components/ConfirmationModal/ConfirmationModal";
import { clearBallot, saveBallot } from "../../services/ballot/actions";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import Loader from "../../components/Loader/Loader";
import AppPage from "../../components/AppPage/AppPage";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import { SaveBallotButton } from "./components/SaveBallotButton";

const mapStateToProps = ({ ballot }) => ({
  movies: ballot.movies,
  isSavingBallot: ballot.isSaving,
  newBallot: ballot.id,
});

const mapDispatchToProps = (dispatch) => ({
  clearBallot: () => dispatch(clearBallot()),
  saveBallot: () => dispatch(saveBallot()),
});

export const CreateBallotPage = ({
  appElement,
  clearBallot,
  movies = [],
  isSavingBallot,
  newBallot,
  saveBallot,
}) => {
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (newBallot) {
      clearBallot();
      history.push(`ballot/${newBallot}`);
    }
  }, [newBallot]);

  return (
    <AppPage>
      <WelcomeMessage isHidden={movies.length > 0} />
      <MovieSearch numResults={5} />
      {movies.length > 0 && <MovieList />}
      <ButtonGroup>
        <SaveBallotButton />
        <button
          className="button button--secondary"
          onClick={() => setConfirmationModalOpen(true)}
          disabled={movies.length < 1}
        >
          Start Over
        </button>
      </ButtonGroup>
      <ConfirmationModal
        appElement={appElement}
        isOpen={isConfirmationModalOpen}
        onClose={() => setConfirmationModalOpen(false)}
        onConfirm={() => {
          clearBallot();
          setConfirmationModalOpen(false);
        }}
      />
    </AppPage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBallotPage);
