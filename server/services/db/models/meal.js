const { Model } = require('objection');
const knexInstance = require('../knexInstance');

Model.knex(knexInstance);

class Meal extends Model {
  static get tableName() {
    return 'meal';
  }
}

module.exports = Meal;
