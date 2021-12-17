exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table.string('email').unique().notNullable();
    table.string('ip_addr', [16]).notNullable();
    table.string('password').notNullable();
    table.string('username', [32]).unique().notNullable();
    table.string('firstname', [64]).notNullable();
    table.string('lastname', [64]).notNullable();
    table.integer('type').unsigned().notNullable();
    table.boolean('disabled').defaultTo(true);
    table.timestamp('last_authorize');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
