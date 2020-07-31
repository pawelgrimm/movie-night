import express from "express";
import { checkSchema, validationResult } from "express-validator";
import voteSchema from "../schema/vote";

import { ballotIdExists, saveVote } from "../firebase/api";

const voteRouter = express.Router();

voteRouter.post("/api/vote/:id", checkSchema(voteSchema), async (req, res) => {
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

export default voteRouter;
