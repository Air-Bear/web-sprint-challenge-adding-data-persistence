const db = require("../data/dbConfig");

function find() {
    return db("resources");
}

function add(data) {
    return db("resources").insert(data);
}

function findProjects(id) {
    return db("resources")
    .join("project-resources", "resources.id", "project-resources.resourceId")
    .join("projects", "projects.id", "project-resources.projectId")
    .select("resources.id as resource-id", "projects.prjName", "projects.prjDescr", "projects.prjComplete")
    .where({resourceId: id});
}

module.exports = {
    find,
    add,
    findProjects
}