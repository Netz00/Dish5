const express = require('express');
const { getAll, insert } = require('../controllers/reservation.js');

const { auth } = require('../middleware/auth.js');

const router = express.Router();

/**
 * Returns array of all reservations
 */
router.get('/', auth, getAll);

/**
 * Inserts new reservation
 */
router.post('/', insert);

module.exports = router;
