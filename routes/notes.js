const homepage = require("express").Router();
const { v4: uuidv4 } = require("uuid");

homepage.post("/", (req, res) => {
  // Destructuring items in req.body
  const { isValid, errors } = req.body;

  const newTask = {
    time: Date.now(),
    uniqueId: uuidv4(),
    errors,
  };

  // If all properties are present
  if (isValid) {
    res.send(newTask, "./Develop/db/db.json");
    res.json("New Task Added");
  } else {
    res.json({
      message: "Error adding new task.",
      uniqueId: newTask.uniqueId,
    });

    const response = {
      status: "New task added!",
      body: newTask,
    };

    res.json(response);
  }
});

module.exports = homepage;
