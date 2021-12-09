const { MealRepo } = require("../services/db");

module.exports = {
  get,
  getAll,
  searchByTitle,
  insert,
  patch,
  remove,
};

async function get(req, res) {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.sendStatus(400);
  try {
    const result = await MealRepo.get(Number(id));
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: error.message });
  }
}

async function searchByTitle(req, res) {
  const { searchQuery } = req.query;
  try {
    const title = searchQuery;
    const result = await MealRepo.search(title);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(404).json({ message: error.message });
  }
}

async function getAll(req, res) {
  const { page } = req.query;

  if (page) {
    try {
      const LIMIT = 4;
      let result = await MealRepo.fetchPage(page, LIMIT);
      result.currentPage = Number(page);
      result.numberOfPages = Math.ceil(result.total / LIMIT);
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json({ message: error.message });
    }
  } else {
    try {
      const result = await MealRepo.getAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json({ message: error.message });
    }
  }
}

async function insert(req, res) {
  const { body: meal } = req;
  delete meal.id;

  try {
    const result = await MealRepo.insert(meal);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
}

async function patch(req, res) {
  const { id } = req.params;

  if (Number.isNaN(Number(id)))
    return res.status(404).send(`No meal with id: ${id}`);

  const { body: meal } = req;
  meal.id = id;

  try {
    const result = await MealRepo.patch(meal);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
}

async function remove(req, res) {
  //if (!req?.authPermissions?.isAdmin) {
  //  return res.sendStatus(403);
  //}

  const { id } = req.params;

  if (Number.isNaN(Number(id)))
    return res.status(404).send(`No meal with id: ${id}`);

  try {
    await MealRepo.remove(Number(id));
    return res.status(200).send("Post deleted successfully.");
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
}
