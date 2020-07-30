import database from "../firebase/firebase";
import { fetchMovie, saveMovie } from "../movie/actions";
import { pushBallot } from "../firebase/api";
import axios from "axios";

export const SAVE_BALLOT_REQUEST = "SAVE_BALLOT_REQUEST";
export const saveBallotRequest = () => ({ type: SAVE_BALLOT_REQUEST });

export const SAVE_BALLOT_SUCCESS = "SAVE_BALLOT_SUCCESS";
export const saveBallotSuccess = (id) => ({ type: SAVE_BALLOT_SUCCESS, id });

export const SAVE_BALLOT_FAILURE = "SAVE_BALLOT_FAILURE";
export const saveBallotFailure = () => ({ type: SAVE_BALLOT_FAILURE });

export const ADD_MOVIE = "ADD_MOVIE";
export const addMovie = (id, movie = {}) => ({ type: ADD_MOVIE, id, movie });

export const addAndSaveMovie = (id, movie = {}) => {
  return (dispatch) => {
    dispatch(saveMovie(id, movie));
    dispatch(addMovie(id, movie));
    dispatch(fetchMovie(id));
  };
};

export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const removeMovie = (id) => ({ type: REMOVE_MOVIE, id });

export const SET_BALLOT = "SET_BALLOT";
export const setBallot = (movies) => ({ type: SET_BALLOT, movies });

export const CLEAR_BALLOT = "CLEAR_BALLOT";
export const clearBallot = () => ({ type: CLEAR_BALLOT });

export const saveBallot = () => {
  return (dispatch, getState) => {
    if (getState().ballot.isSaving) {
      return;
    }
    dispatch(saveBallotRequest());
    const ballot = {
      movies: getState().ballot.movies,
      owner: "testId" /* getState().auth.uid */,
    };
    return axios
      .post("/api/ballot", ballot)
      .then((res) => res.data.ballotId)
      .then((ballotId) => dispatch(saveBallotSuccess(ballotId)))
      .catch(() => {
        dispatch(saveBallotFailure());
      });
  };
};
