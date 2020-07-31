import axios from "axios";

export const getBallot = (id) => {
  return axios.get(`/api/ballot/${id}`).then((res) => res.data.ballot);
};

export const pushBallot = (ballot) => {
  return axios.post("/api/ballot", ballot).then((res) => res.data.ballotId);
};
