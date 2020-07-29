const express = require("express");
const path = require("path");
require("dotenv").config({ path: ".env.development" });
const apiRouter = require("./apiRouter");

const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(publicPath));
app.use(express.json());

app.use(apiRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
