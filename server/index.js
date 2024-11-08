const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("working good...");
});

app.listen(3000, () => {
  console.log("hello");
});
