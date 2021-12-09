exports.up = function (knex) {
  return knex.schema.createTable("meal", function (table) {
    table.increments("id").primary();
    table.string("title").unique().notNullable();
    table.string("description");
    table.specificType("price", "float8").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("meal");
};
