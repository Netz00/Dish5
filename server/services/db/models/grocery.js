const { Model } = require('objection');
const knexInstance = require('../knexInstance');

Model.knex(knexInstance);

class Grocery extends Model {
  static get tableName() {
    return 'grocery';
  }
  static get idColumn() {
    return 'id';
  }
}

module.exports = Grocery;
