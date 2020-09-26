
exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
        tbl.increments();
        tbl.text("prjName", 128)
            .notNullable();
        tbl.text("prjDescr", 128);
        tbl.boolean("prjComplete")
            .notNullable()
            .defaultTo(false);
    })
    .createTable("tasks", tbl => {
        tbl.increments();
        tbl.text("tskDescr", 128)
            .notNullable();
        tbl.text("tskNotes", 128);
        tbl.boolean("tskComplete")
            .notNullable()
            .defaultTo(false);
        tbl.integer("prjId")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    })
    .createTable("resources", tbl => {
        tbl.increments();
        tbl.text("rescName", 128)
            .notNullable();
        tbl.text("rescDescr", 128);
    })
    .createTable("project-resources", tbl => {
        tbl.increments();
        tbl.integer("projectId")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
        tbl.integer("resourceId")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
            .onUpdate("CASCADE")
            .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projects")
  .dropTableIfExists("tasks")
  .dropTableIfExists("resources");
};
