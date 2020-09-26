const express = require("express");
const router = express.Router();

const Tasks = require("./tasksModel");

router.get("/", (req, res) => {
    Tasks.find()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        console.log("tasks get error: ", err);
        res.status(500).json({
            message: "error retrieving tasks list"
        });
    });
});

router.post("/", (req, res) => {
    Tasks.add(req.body)
    .then(task => {
        res.status(201).json(task);
    })
    .catch(err => {
        console.log("task post error: ", err);
        res.status(500).json({
            message: "error creating task"
        });
    });
});

module.exports = router;