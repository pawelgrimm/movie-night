import database from "./firebase";
import { convertListToArray, convertVotesToResults } from "../utils/utils";
import determineWinner from "../controllers/determineWinner";

export const pushBallot = (ballot) => {
  return database
    .ref("ballots")
    .push(ballot)
    .then((ref) => ref.key);
};

export const getBallot = (id) => {
  return database
    .ref(`ballots/${id}`)
    .once("value")
    .then((snapshot) => {
      const ballot = snapshot.val();
      ballot.votes = convertListToArray(ballot.votes);
      ballot.results = convertVotesToResults(ballot.votes);
      delete ballot.votes;
      return ballot;
    });
};

export const getMoviesOnBallot = (id) => {
  return database.ref(`ballots/${id}/movies`).once("value");
};

export const saveVote = (ballotId, vote) => {
  return database.ref(`ballots/${ballotId}/votes`).push(vote);
};

export const ballotIdExists = (ballotId) => {
  return database
    .ref(`ballots/${ballotId}`)
    .once("value")
    .then((snapshot) => !!snapshot.val());
};

export const endVoting = (ballotId) => {
  return getBallot(ballotId).then(({ results }) => {
    const winner = determineWinner(results.movies);
    return database
      .ref(`ballots/${ballotId}/winner`)
      .set(winner)
      .then(() => true)
      .catch((err) => err);
  });
};
