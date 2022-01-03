const { Model } = require('objection');
const knexInstance = require('../knexInstance');

Model.knex(knexInstance);

class Menu extends Model {
  static get tableName() {
    return 'menu';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 64 },
      },
    };
  }

  static get relationMappings() {
    const Meal = require('./meal');

    return {
      meals: {
        relation: Model.ManyToManyRelation,
        modelClass: Meal,
        join: {
          from: 'menu.id',
          through: {
            from: 'menu_offer_meals.menu_id',
            to: 'menu_offer_meals.meal_id',
          },
          to: 'meal.id',
        },
      },
    };
  }
}

module.exports = Menu;
