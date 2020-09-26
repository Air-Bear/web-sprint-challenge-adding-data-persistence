const express = require("express");
const app = express();

const projectsRouter = require("./projects/projectsRouter");
const tasksRouter = require("./tasks/tasksRouter");
const resourcesRouter = require("./resources/resourcesRouter");

app.use(express.json());

app.use("/api/projects", projectsRouter);
app.use("/api/tasks", tasksRouter);
app.use("/api/resources", resourcesRouter);

module.exports = app;