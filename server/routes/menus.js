const express = require('express');
const { getAll, get } = require('../controllers/menus.js');

const router = express.Router();

/**
 * Returns array of all menus
 */
router.get('/', getAll);

/**
 * Returns menu with selected id and his meals
 */
router.get('/:id', get);

module.exports = router;
