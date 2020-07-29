const database = require("./firebase");

const convertListToArray = (list) => {
  const array = [];
  for (const key in list) {
    if (list.hasOwnProperty(key)) {
      array.push(list[key]);
    }
  }
  return array;
};

const convertVotesToResults = (votes) => {
  const results = { users: [], movies: {} };
  Object.entries(votes).forEach(([key, vote]) => {
    results.users.push(vote.user);
    Object.entries(vote.votes).forEach(([yayOrNay, votes]) => {
      votes.forEach((movie) => {
        if (!results.movies[movie]) {
          results.movies[movie] = { yay: 0, nay: 0 };
        }
        results.movies[movie][yayOrNay] = results.movies[movie][yayOrNay] + 1;
      });
    });
  });
  return results;
};

const getResults = (id) => {
  return database
    .ref(`ballots/${id}`)
    .once("value")
    .then((snapshot) => {
      const ballot = snapshot.val();
      return convertVotesToResults(ballot.votes);
    });
};

const getBallot = (id) => {
  return database
    .ref(`ballots/${id}`)
    .once("value")
    .then((snapshot) => {
      const ballot = snapshot.val();
      ballot.votes = convertListToArray(ballot.votes);
      return ballot;
    });
};

const saveVote = (ballotId, vote) => {
  return database.ref(`ballots/${ballotId}/votes`).push(vote);
};

module.exports = {
  getBallot,
  saveVote,
  getResults,
};
