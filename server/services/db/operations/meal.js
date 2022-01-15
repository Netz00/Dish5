const Meal = require('../models/meal');

module.exports = {
  get,
  getAll,
  fetchPage,
  search,
  insert,
  patch,
  remove,
  getAllGroceries,
};

function get(id) {
  return Meal.query().findById(id);
}

function getAll() {
  //return Meal.query();

  return Meal.query().select('id', 'name', 'price', 'description', 'menu_id');
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

// get all groceries for specific meal
async function getAllGroceries(id) {
  return Meal.query()
    .select('id')
    .findById(id)
    .withGraphFetched('groceries')
    .modifyGraph('groceries', (builder) => {
      builder.select('id', 'name');
    });
}
