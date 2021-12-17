const Menu = require('../models/menu');

module.exports = {
  get,
  getAll,
};

// get al menus
function getAll() {
  return Menu.query();
}

// get all meals for specific menu
function get(id) {
  return Menu.query().findById(id).withGraphFetched('meals');
}

// add menu

// add meals to menu

// remove meals from menu

// remove menu
