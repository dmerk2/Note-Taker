const express = require("express");
const api = require("./routes/notes.js");
const uuid = require("uuid");
const app = express("express");
const fs = require('fs');

const PORT = process.env.port || 3001;

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
