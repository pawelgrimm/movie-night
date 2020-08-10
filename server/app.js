import path from "path";
import express from "express";
import helmet from "helmet";
import expressStaticGzip from "express-static-gzip";
import ballotRouter from "./routers/ballot";
import voteRouter from "./routers/vote";
import movieRouter from "./routers/movie";
import appRoot from "app-root-path";

const app = express();
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        baseUri: ["'self'"],
        defaultSrc: ["'self'", "https://www.youtube.com"],
        imgSrc: ["'self'", "https://image.tmdb.org"],
        objectSrc: ["'none'"],
        scriptSrc: ["'self'", "https://www.youtube.com", "https://s.ytimg.com"],
        styleSrc: ["'self'", "https://fonts.googleapis.com"],
        fontSrc: ["'self'", "https://fonts.gstatic.com"],
        upgradeInsecureRequests: [],
      },
    },
  })
);
app.disable("x-powered-by");

const publicPath = path.join(appRoot.toString(), "public");
app.use(
  expressStaticGzip(publicPath, {
    enableBrotli: true,
    orderPreference: ["br", "gz"],
  })
);

app.use(express.json());
app.use(ballotRouter);
app.use(voteRouter);
app.use(movieRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;
