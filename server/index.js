const express = require("express");
const app = express();
const router = require("./routers/auth-router");

app.use("/", router);

app.listen(3000, () => {
  console.log("hello");
});
