const homepage = require("express").Router();
const { v4: uuidv4 } = require("uuid");

homepage.post("/", (req, res) => {
    const { isValid, errors } = req.body;

    const newTask = {
        time: Date.now(),
        error_id: uuidv4(),
        errors,
    }

    if(!isValid) {
        readAndAppend(newTask, './Develop/db/db.json');
        res.json('New Task Added');
    } else {
        res.json({
            message: 'Object is valid but not logging.',
            error_id: newTask.error_id,
        })
    }
});

module.exports = homepage;
