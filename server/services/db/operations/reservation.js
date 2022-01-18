const Reservation = require('../models/reservation');

module.exports = {
  getAll,
  insert,
};

// get al reservations
function getAll() {
  return Reservation.query().select();
}

// remove reservation
function insert(reservation) {
  return Reservation.query().insert(reservation);
}
