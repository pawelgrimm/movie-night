const express = require("express");
const { getBallot, saveVote } = require("./firebase/api");

const apiRouter = express.Router();

apiRouter.get("/api/ballot/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const ballot = await getBallot(id);
    res.status(200).send({ ballot });
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

apiRouter.post("/api/vote/:id", async (req, res) => {
  const ballotId = req.params.id;
  // TODO: validate vote format
  const vote = req.body;
  try {
    await saveVote(ballotId, vote);
    res.status(200).send();
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});

module.exports = apiRouter;
