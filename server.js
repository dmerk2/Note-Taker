const express = require('express');
const uuid = require('uui');
const api = require("./routes/notes.js");

const app = express("express");

const PORT = process.env.port || 3001;

app.use('/routes/notes.js')

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(".routes/notes.html", api);

app.use(express.static("public"));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
