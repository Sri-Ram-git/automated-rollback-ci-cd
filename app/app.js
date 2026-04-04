const express = require("express");
const app = express();

const VERSION = process.env.VERSION || "Version 2 - Working";

app.get("/", (req, res) => {
  res.send(VERSION);
});

app.get("/crash", (req, res) => {
  process.exit(1);
});

app.listen(3000, () => console.log("Server running on port 3000"));