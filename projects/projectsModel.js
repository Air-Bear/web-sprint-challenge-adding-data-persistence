const db = require("../data/dbConfig");

function find() {
    return db("projects");
}

function findById(id) {
    return db("projects").where({id}).first()
}

function add(data) {
    return db("projects").insert(data);
}

function findTasks(id) {
    return db("tasks")
        .join("projects", "projects.id", "tasks.prjId")
        .select("*")
        .where({prjId: id});
}

function findResources(id) {
    return db("projects")
    .join("project-resources", "projects.id", "project-resources.projectId")
    .join("resources", "resources.id", "project-resources.resourceId")
    .select("projects.id as project-id", "resources.id", "resources.rescName", "resources.rescDescr")
    .where({projectId: id});
}

module.exports = {
    find,
    findById,
    add,
    findTasks,
    findResources
}