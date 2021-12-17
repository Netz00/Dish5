const { MenuRepo } = require('../services/db');

module.exports = {
  get,
  getAll,
};

async function get(req, res) {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.sendStatus(400);
  try {
    const result = await MenuRepo.get(Number(id));
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: error.message });
  }
}

async function getAll(req, res) {
  try {
    const result = await MenuRepo.getAll();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: error.message });
  }
}
