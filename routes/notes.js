const homepage = require("express").Router();
const { v4: uuidv4 } = require("uuid");

// Route is actually -> POST METHOD to /api/
homepage.post("/", (req, res) => {
  // Destructuring items in req.body
  const { title, text } = req.body;
  console.log(req.body);

  // Create a new temp object and fill in any needed values not given by USER
  const newTask = {
    id: uuidv4(),
    title: title,
    text: text
  };

 // take the new Task and update our database -> db.json file (DATA PERSISTANCE!!)
 // 1) grab the existing Data --> fs we read in the db.json data -> 
 // *) ->  convert that data into a JS object (parse stringify methods)
 // 2) We need to ADD the NEW TASK (data.push(newTask))
 // 3) Now we have new data to SAVE --> write new data file to perminant storage (fs.write)
 
 res.json(newTask);
});

module.exports = homepage;
