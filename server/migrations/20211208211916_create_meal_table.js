exports.up = function (knex) {
  return knex.schema.createTable('meal', function (table) {
    table.increments('id').primary();
    table.string('name', [64]).unique().notNullable();
    table.float('price').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('meal');
};
