const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Harness CI/CD Demo Running Successfully!");
});

const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});