const express = require("express");
const fs = require('fs');
const path = require('path');

// Import the modular routers for /notes
const notesRouter = require("./notes");

const app = express();

app.use('/notes', notesRouter);

module.exports = app;