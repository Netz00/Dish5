const express = require('express');
const {
  getAll,
  get,
  deleteMenu,
  insertMenu,
} = require('../controllers/menus.js');

const { auth } = require('../middleware/auth.js');

const router = express.Router();

/**
 * Returns array of all menus
 */
router.get('/', getAll);

/**
 * Removes menu with selected id
 */
router.delete('/:id', auth, deleteMenu);

/**
 * Inserts new menu with desired values
 */
router.post('/', auth, insertMenu);







/**
 * Returns menu with selected id and his meals
 */
router.get('/:id', get);

module.exports = router;
