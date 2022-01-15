const { Model } = require('objection');
const knexInstance = require('../knexInstance');

Model.knex(knexInstance);

class User extends Model {
  static get tableName() {
    return 'user';
  }
  static get idColumn() {
    return 'id';
  }
}

module.exports = User;
