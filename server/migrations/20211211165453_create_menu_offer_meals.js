exports.up = function (knex) {
  return knex.schema.createTable('menu_offer_meals', function (table) {
    table
      .integer('menu_id')
      .references('menu.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table
      .integer('meal_id')
      .references('meal.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.primary(['menu_id', 'meal_id']);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('menu_offer_meals');
};
