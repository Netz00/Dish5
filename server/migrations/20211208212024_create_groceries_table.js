exports.up = function (knex) {
  return knex.schema.createTable("groceries", function (table) {
    table.increments("id").primary();
    table.string("name").unique().notNullable();
    table.specificType("balance", "float8").notNullable();
    table.specificType("price", "float8").notNullable();
    table.timestamp("expiry_date");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("groceries");
};
