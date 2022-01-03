const Menu = require('../models/menu');

module.exports = {
  get,
  getAll,
  getAllMeals,
};

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
function getAllMeals(id) {
  return Menu.query()
    .select('id', 'name')
    .withGraphFetched('meals')
    .modifyGraph('meals', (builder) => {
      builder.select('id', 'name', 'price');
    });
}

// add menu

// add meals to menu

// remove meals from menu

// remove menu
