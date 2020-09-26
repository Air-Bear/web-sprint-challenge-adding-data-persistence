const express = require("express");
const router = express.Router();

const Resources = require("./resourcesModel");

router.get("/", (req, res) => {
    Resources.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(err => {
        console.log("resources get error: ", err);
        res.status(500).json({
            message: "error retrieving resources list"
        });
    });
});

router.post("/", (req, res) => {
    Resources.add(req.body)
    .then(resource => {
        res.status(201).json(resource);
    })
    .catch(err => {
        console.log("resource post error: ", err);
        res.status(500).json({
            message: "error creating resource"
        });
    });
});

router.get("/:id/projects", (req, res) => {
    const {id} = req.params;

    Resources.findProjects(id)
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log("resource projects get error: ", err);
        res.status().json({
            message: "error retrieving resource project list"
        });
    });
});

module.exports = router;