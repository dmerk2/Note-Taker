const express = require("express");
const api = require("./routes/notes.js");
const database = require("./Develop/db/db.json");
const path = require("path");

const app = express();

const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("Develop/public"));

// GET Route for homepage
app.get("/", (req, res) => {
  let newNote = req.body;

  database.push(newNote);
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

// GET Route for notes page
app.get("/notes", (req, res) => 
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"))
);

// For any invalid routes
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
//   res.send("404 Error! This is an invalid URL");
// });

// Server on PORT starts to listen for reqests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
