const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("Testing 123");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});