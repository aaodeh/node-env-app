const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Use environment variable ENVIRONMENT or default to 'UNSET'
const environment = process.env.ENVIRONMENT || "UNSET";

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/environment", (req, res) => {
  res.json({ environment });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
