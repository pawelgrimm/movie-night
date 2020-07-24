import database from "./firebase";

export const pushBallot = (ballot) => {
  return database.ref("ballots").push(ballot);
};

export const getMoviesOnBallot = (id) => {
  return database.ref(`ballots/${id}/movies`).once("value");
};
