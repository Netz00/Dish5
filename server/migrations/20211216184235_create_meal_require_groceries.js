exports.up = function (knex) {
  return knex.schema.createTable('meal_require_groceries', function (table) {
    table
      .integer('grocery_id')
      .references('grocery.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('meal_id')
      .references('meal.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.primary(['grocery_id', 'meal_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('meal_require_groceries');
};
