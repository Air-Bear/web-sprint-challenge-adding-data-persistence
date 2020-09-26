const db = require("../data/dbConfig");

function find() {
    return db("tasks")
        .join("projects", "projects.id", "tasks.prjId")
        .select("tasks.id as task-id", "projects.prjName as project-name", "projects.prjDescr as project-desc", "tasks.tskDescr as task-description", "tasks.tskNotes as task-notes");
}

function add(data) {
    return db("tasks").insert(data);
}

module.exports = {
    find,
    add
}