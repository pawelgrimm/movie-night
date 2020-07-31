import database from "./firebase";
import { convertListToArray, convertVotesToResults } from "../utils/utils";

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
  return database
    .ref(`ballots/${ballotId}/isVotingOver`)
    .set("true")
    .then(() => true)
    .catch((err) => err);
};
