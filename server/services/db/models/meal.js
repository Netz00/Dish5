const { Model } = require('objection');
const knexInstance = require('../knexInstance');

Model.knex(knexInstance);

class Meal extends Model {
  static get tableName() {
    return 'meal';
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
        description: { type: 'string' },
        price: { type: 'number' },
      },
    };
  }

  static get relationMappings() {
    const Grocery = require('./grocery');
    const Menu = require('./menu');

    return {
      groceries: {
        relation: Model.ManyToManyRelation,
        modelClass: Grocery,
        join: {
          from: 'meal.id',
          through: {
            from: 'meal_require_groceries.meal_id',
            to: 'meal_require_groceries.grocery_id',
          },
          to: 'grocery.id',
        },
      },
      menu: {
        relation: Model.BelongsToOneRelation,
        modelClass: Menu,
        join: {
          from: 'meal.menu_id',
          to: 'menu.id',
        },
      },
    };
  }
}

module.exports = Meal;
