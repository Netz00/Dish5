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
        relation: Model.HasManyRelation,
        modelClass: Meal,
        join: {
          from: 'menu.id',
          to: 'meal.menu_id',
        },
      },
    };
  }
}

module.exports = Menu;
