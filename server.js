const express = require("express");
const api = require("./routes/notes.js");
const uuid = require("uuid");
const app = express("express");
const database = require('./Develop/db/db.json')
let path = require("path")
const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

// app.use(express.static('public'));

// GET Route for homepage
app.get("/", (req, res) =>{
let newNote = req.body;
  res.sendFile(path.join(__dirname, "/public/index.html"))
  database.push(newNote);
});

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/pages/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
