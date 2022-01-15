const Menu = require('../models/menu');

module.exports = {
  get,
  getAll,
  getAllMeals,
  IdExists,
  findByIdAndRemove,
  insert
};

function IdExists(id) {
  return Menu.query().findById(id);
}

function findByIdAndRemove(id) {
  return Menu.query().deleteById(id);
}

// get al menus
function getAll() {
  return Menu.query().select('id', 'name');
}

// get all meals for specific menu
function get(id) {
  return Menu.query()
    .select('id', 'name')
    .findById(id)
    .withGraphFetched('meals')
    .modifyGraph('meals', (builder) => {
      builder.select('id', 'name', 'price');
    });
}

// get all meals for all menus
function getAllMeals() {
  return Menu.query()
    .select('id', 'name')
    .withGraphFetched('meals')
    .modifyGraph('meals', (builder) => {
      builder.select('id', 'name', 'price', 'description');
    });
}

// add menu

// add meals to menu

// remove meals from menu

// remove menu
function insert(menu) {
  return Menu.query().insert(menu);
}
