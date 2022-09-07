const homepage = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");

homepage.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Develop/db/db.json"));
});

// Route is actually -> POST METHOD to /api/
homepage.post("/", (req, res) => {
  // Destructuring items in req.body
  const { title, text } = req.body;
  console.log(req.body);

  // we create a new temp object and fill in any needed values not given by USER
  const newTask = {
    id: uuidv4(),
    title: title,
    text: text,
  };

  // 1) grab the existing Data --> fs we read in the db.json data
  let db = fs.readFileSync("./Develop/db/db.json");

  db = JSON.parse(db);

  // Add new task f
  db.push(newTask);

  // Now we have new data to SAVE --> write new data file to perminant storage
  fs.writeFileSync("./Develop/db/db.json", JSON.stringify(db));
  res.json(db);
  res.json(newTask);
});

module.exports = homepage;
