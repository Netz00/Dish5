const express = require('express');
const {
  getAll,
  get,
  searchByName,
  insert,
  patch,
  remove,
  getAllGroceries,
} = require('../controllers/meals.js');

const { auth } = require('../middleware/auth.js');

const router = express.Router();

/**
 * Returns array of all meals
 * or
 * Returns page one of meals
 */
router.get('/', getAll);

/**
 * Inserts new meal with desired values
 */
router.post('/', auth, insert);

/**
 * Removes meal with selected id
 */
router.delete('/:id', auth, remove);





/**
 * Get all groceries for specified meal id
 */
router.get('/groceries/:id', getAllGroceries);

/**
 * Search all meals by name
 */
router.get('/search', searchByName);

/**
 * Returns meal with selected id
 */
router.get('/:id', get);

/**
 * Updates meal with new values
 * just send changed values, not entire meal object(PATCH not PUT)
 */
router.patch('/:id', auth, patch);

module.exports = router;
