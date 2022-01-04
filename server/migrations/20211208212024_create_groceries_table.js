exports.up = function (knex) {
  return knex.schema.createTable('grocery', function (table) {
    table.increments('id').primary();
    table.string('name', [64]).unique().notNullable();
    table.float('balance').notNullable();
    table.float('price').notNullable();
    table.float('minBalance');
    table.string('unit', [4]).notNullable();
    table.timestamp('expiry_date');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('grocery');
};
