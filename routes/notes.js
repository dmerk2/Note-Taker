const express = require("express");

// Importing modular routers
const notesRouter = require("./notes");
const homepageRouter = require('./index')

const app = express();

app.use("./notes", notesRouter);
app.use("./index", homepageRouter);

module.exports = app;
