const express = require("express");
const router = express.Router();

const Projects = require("./projectsModel");

router.get("/", (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log("projects get error: ", err);
        res.status(500).json({
            message: "Could not retrieve projects list"
        });
    });
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
    
    Projects.findById(id)
    .then(project => {
        if(project){
            res.status(200).json(project);
        }
        else{
            res.status(404).json({
                message: "project not found"
            });
        }
    })
    .catch(err => {
        console.log("project get error: ", err);
        res.status(500).json({
            message: "error retrieving project"
        });
    });
});

router.post("/", (req, res) => {
    Projects.add(req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        console.log("project post error: ", err);
        res.status(500).json({
            message: "error creating project"
        });
    });
});

router.get("/:id/tasks", (req, res) => {
    const {id} = req.params;
    
    Projects.findTasks(id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => {
        console.log("prject tasks get error: ", err);
        res.status(500).json({
            message: "error receiving project tasks list"
        });
    });
});

router.get("/:id/resources", (req, res) => {
    const {id} = req.params;

    Projects.findResources(id)
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => {
        console.log("project resources get error: ", err);
        res.status(500).json({
            message: "error retrieving project resources list"
        });
    });
});

module.exports = router;