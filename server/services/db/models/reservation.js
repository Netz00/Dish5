const { Model } = require('objection');
const knexInstance = require('../knexInstance');

Model.knex(knexInstance);

class Reservation extends Model {
  static get tableName() {
    return 'reservation';
  }
  static get idColumn() {
    return 'id';
  }
}

module.exports = Reservation;
