const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

const app = express();
app.use(express.static(publicPath));

app.post("/api/ballot", (req, res) => {
  res.status(202).send({ id: 1234 });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
