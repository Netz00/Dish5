const Meal = require('../models/meal');

module.exports = {
  get,
  getAll,
  fetchPage,
  search,
  insert,
  patch,
  remove,
};

function get(id) {
  return Meal.query().findById(id);
}

function getAll() {
  return Meal.query();
}

function search(term) {
  return Meal.query().where('name', 'like', `%${term.replace('%', '\\%')}%`);
}

function fetchPage(number, size) {
  return Meal.query().page(number, size);
}

function insert(meal) {
  return Meal.query().insert(meal);
}

function patch(meal) {
  const { id } = meal;
  return Meal.query().patchAndFetchById(id, meal);
}

async function remove(id) {
  return Meal.query().deleteById(id);
}
