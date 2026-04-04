const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Version 1 - App is Working");
});

// FAILURE TRIGGER
app.get("/crash", (req, res) => {
  process.exit(1); // simulate crash
});

app.listen(3000, () => console.log("Server running on port 3000"));