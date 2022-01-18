exports.up = function (knex) {
  return knex.schema.createTable('reservation', function (table) {
    table.increments('id').primary();
    table.integer('number_of_persons').unsigned().notNullable();
    table.string('firstname', [64]).notNullable();
    table.string('lastname', [64]).notNullable();
    table.string('contact_number').notNullable();
    table.string('email').unique().notNullable();
    table.timestamp('arrival_time').defaultTo(knex.fn.now());
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('reservation');
};
