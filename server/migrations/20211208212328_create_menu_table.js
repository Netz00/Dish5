exports.up = function (knex) {
  return knex.schema.createTable("menu", function (table) {
    table.increments("id").primary();
    table.string("title", [64]).unique().notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("menu");
};
