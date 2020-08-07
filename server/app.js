import path from "path";
import express from "express";
import ballotRouter from "./routers/ballot";
import voteRouter from "./routers/vote";
import movieRouter from "./routers/movie";
import appRoot from "app-root-path";
import expressStaticGzip from "express-static-gzip";

const app = express();
const publicPath = path.join(appRoot.toString(), "public");
console.log("publicPath:", publicPath);

app.use(
  "/",
  expressStaticGzip(publicPath, {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
  })
);

app.use(express.static(publicPath));
app.use(express.json());
app.use(ballotRouter);
app.use(voteRouter);
app.use(movieRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;
