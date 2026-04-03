const express = require('express');
const app = express();

const PORT = 3000;

// Auto crash if env variable is set
if (process.env.CRASH === "true") {
  console.log("Simulating crash...");
  process.exit(1);
}

app.get('/', (req, res) => {
  res.send('App Running Fine');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});