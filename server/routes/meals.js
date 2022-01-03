const express = require('express');
const {
  getAll,
  get,
  searchByName,
  insert,
  patch,
  remove,
} = require('../controllers/meals.js');

const router = express.Router();

/**
 * Search all meals by name
 */
router.get('/search', searchByName);

/**
 * Returns array of all meals
 * or
 * Returns page one of meals
 */
router.get('/', getAll);

/**
 * Returns meal with selected id
 */
router.get('/:id', get);

/**
 * Inserts new meal with desired values
 */
router.post('/', insert);

/**
 * Updates meal with new values
 * just send changed values, not entire meal object(PATCH not PUT)
 */
router.patch('/:id', patch);

/**
 * Removes meal with selected id
 */
router.delete('/:id', remove);

module.exports = router;
