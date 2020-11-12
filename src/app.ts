require('dotenv').config();
import express from "express";
import path from "path";
const app = express();

console.log('I*M BREAKING THE RULEZ !?!?!')

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})

app.get("/api/dymmu", (req, res) => {
  res.json({ msg: "olleH" })
})

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


