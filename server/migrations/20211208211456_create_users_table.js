exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.increments("id").primary();
    table.string("email").notNullable();
    table.string("ip_addr").notNullable();
    table.string("password").notNullable();
    table.text("username").unique().notNullable();
    table.text("firstname").notNullable();
    table.text("lastname").notNullable();
    table.integer("type");
    table.boolean("disabled").defaultTo(true);
    table.timestamp("last_authorize");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
