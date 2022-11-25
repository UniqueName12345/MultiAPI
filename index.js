import express from "express";
import facts from "./facts.json";
const app = express();

const facts = ["testing123"]

app.get("/fact/random", (req, res) => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  res.send(randomFact);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});