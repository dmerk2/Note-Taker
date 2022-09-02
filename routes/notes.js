const express = require("express").Router();
const { v4: uuidv4 } = require("uuid");
// Importing modular routers
const notesRouter = require("./notes");
const homepageRouter = require('./index')

const app = express();

app.use("./notes", notesRouter);
app.use("./index", homepageRouter);

module.exports = app;
