import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router";
import ResultsContext, { defaultState } from "./components/ResultsContext";
import { getBallot } from "../../services/server/api";
import {
  dataFetchReducer,
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "./components/dataFetchReducer";

const useBallotApi = (ballotId) => {
  const [state, dispatch] = useReducer(dataFetchReducer, defaultState);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: FETCH_REQUEST });

      try {
        const results = await getBallot(ballotId);
        if (!didCancel) {
          dispatch({ type: FETCH_SUCCESS, payload: results });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: FETCH_FAILURE });
        }
      }
    };

    fetchData().then(
      () => {},
      () => {}
    );

    return () => {
      didCancel = true;
    };
  }, []);

  return state;
};

const ResultsProvider = ({ children }) => {
  const { id: ballotId } = useParams();
  const ballot = useBallotApi(ballotId);
  return (
    <ResultsContext.Provider value={ballot}>{children}</ResultsContext.Provider>
  );
};

export default ResultsProvider;
