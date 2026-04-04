const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("App Running Successfully 🚀");
});

// FAILURE TRIGGER
app.get("/crash", (req, res) => {
  process.exit(1); // simulate crash
});

app.listen(3000, () => console.log("Server running on port 3000"));