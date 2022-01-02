const Menu = require('../models/menu');

module.exports = {
  get,
  getAll,
  getAllMeals,
};

// get al menus
function getAll() {
  return Menu.query().select('id', 'title');
}

// get all meals for specific menu
function get(id) {
  return Menu.query()
    .select('id', 'title')
    .findById(id)
    .withGraphFetched('meals')
    .modifyGraph('meals', (builder) => {
      builder.select('id', 'title', 'price');
    });
}


// get all meals for all menus
function getAllMeals(id) {
  return Menu.query()
    .select('id', 'title')
    .withGraphFetched('meals')
    .modifyGraph('meals', (builder) => {
      builder.select('id', 'title', 'price');
    });
}

// add menu

// add meals to menu

// remove meals from menu

// remove menu
