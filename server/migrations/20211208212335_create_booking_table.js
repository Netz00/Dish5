exports.up = function (knex) {
  return knex.schema.createTable("booking", function (table) {
    table.increments("id").primary();
    table.integer("number_of_persons").unsigned().notNullable();
    table.string("fullname", [128]).notNullable();
    table.string("contact").notNullable();
    table.timestamp("time_of_arrival").defaultTo(knex.fn.now());
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("booking");
};
