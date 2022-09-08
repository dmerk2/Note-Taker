const express = require("express");
const api = require("./routes/notes.js");
const database = require("./Develop/db/db.json");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("Develop/public"));

// GET Route for homepage
app.get("/", (req, res) => {
  let newNote = req.body;

  // Add the new note to the database
  database.push(newNote);
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"))
);

// For any invalid routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
  res.send("404 Error! This is an invalid URL");
});

// Delete notes
// app.delete("/notes/:id", (req, res) => {
//   let deleteNote = path.join(__dirname, databse);

//   for (let i = 0; i < database.length; i++) {
//     if (database[i].id === req.params.id) {
//       database.splice(i, 1);
//       break;
//     }
//   }
//   fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify(database));

//   res.json(database);
// });

function deleteNote(id, notesArray) {
  for (let i = 0; i < notesArray.length; i++) {
    let note = notesArray[i];

    if (note.id == id) {
      notesArray.splice(i, 1);
      fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify(notesArray, null, 2)
      );

      break;
    }
  }
}

app.delete("/api/notes/:id", (req, res) => {
  deleteNote(req.params.id, database);
  res.json(true);
});

// Server on PORT starts to listen for reqests
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
