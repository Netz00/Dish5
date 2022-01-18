const { ReservationRepo } = require('../services/db');

module.exports = {
  getAll,
  insert,
};

async function getAll(req, res) {
  if (!req.userId) return res.status(403).json({ message: 'Unauthenticated' });

  try {
    const result = await ReservationRepo.getAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

async function insert(req, res) {
  const { body: reservation } = req;
  delete reservation.id;
  try {
    const result = await ReservationRepo.insert(reservation);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}
