const express = require("express");

const app = express();

app.post("/api/:code", (req, res) => {
  //   console.log(req.params.code);
  res.send("OK");
});

app.listen(5000, () => {
  console.log("Listening");
});
