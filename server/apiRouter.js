const express = require("express");
const { ballotSchema, voteSchema } = require("./schema");
const {
  getBallot,
  saveVote,
  ballotIdExists,
  pushBallot,
} = require("./firebase/api");

const apiRouter = express.Router();
const { checkSchema, validationResult } = require("express-validator");

apiRouter.post("/api/ballot", checkSchema(ballotSchema), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }
  const ballot = {
    owner: req.body.owner,
    movies: req.body.movies,
    isVotingOver: false,
    results: {
      users: [],
      movies: {},
    },
  };
  try {
    const ballotId = await pushBallot(ballot);
    if (!ballotId) {
      res.status(500).send();
      return;
    }
    res.status(200).send({ ballotId });
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

apiRouter.get("/api/ballot/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const ballot = await getBallot(id);
    if (!ballot) {
      res.status(404).send();
    }
    res.status(200).send({ ballot });
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

apiRouter.post("/api/vote/:id", checkSchema(voteSchema), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const ballotId = req.params.id;
  const ballotExists = ballotIdExists(ballotId);
  if (!ballotExists) {
    res.status(404).send();
  }

  const vote = {
    user: req.body.user,
    votes: {
      yay: req.body.votes.yay,
      nay: req.body.votes.nay,
    },
  };

  try {
    await saveVote(ballotId, vote);
    res.status(200).send(vote);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = apiRouter;
