import axios from "axios";

export const getBallot = (id) => {
  return axios.get(`/api/ballot/${id}`).then((res) => res.data.ballot);
};

export const pushBallot = (ballot) => {
  return axios.post("/api/ballot", ballot).then((res) => res.data.ballotId);
};

export const endVoting = (id) => {
  return axios.post(`/api/ballot/${id}/end`).then((res) => res.data);
};

export const pushVote = (id, user, movies) => {
  const votes = { yay: [], nay: [] };
  Object.entries(movies).forEach(([id, yayOrNay]) =>
    votes[yayOrNay].push(Number(id))
  );
  return axios.post(`/api/vote/${id}`, { user, votes }).then((res) => res.data);
};
