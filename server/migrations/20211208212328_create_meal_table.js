exports.up = function (knex) {
  return knex.schema.createTable('meal', function (table) {
    table.increments('id').primary();
    table.string('name', [64]).unique().notNullable();
    table.text('description');
    table.float('price').notNullable();
    table
      .integer('menu_id')
      .references('menu.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('meal');
};
