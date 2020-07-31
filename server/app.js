import path from "path";
import express from "express";
import ballotRouter from "./routers/ballot";
import voteRouter from "./routers/vote";

const app = express();
const publicPath = path.join(__dirname, "..", "public");
app.use(express.static(publicPath));
app.use(express.json());
app.use(ballotRouter);
app.use(voteRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;
