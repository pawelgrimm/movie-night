import express from "express";
import { checkSchema, validationResult } from "express-validator";
import ballotSchema from "../schema/ballot";
import { pushBallot, getBallot } from "../firebase/api";

const ballotRouter = express.Router();

ballotRouter.get("/api/ballot/:id", async (req, res) => {
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

ballotRouter.post(
  "/api/ballot",
  checkSchema(ballotSchema),
  async (req, res) => {
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
  }
);

export default ballotRouter;
