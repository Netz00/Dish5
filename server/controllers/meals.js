const { MealRepo } = require('../services/db');

module.exports = {
  get,
  getAll,
  searchByName,
  insert,
  patch,
  remove,
  getAllGroceries,
};

async function getAll(req, res) {
  try {
    const result = await MealRepo.getAll();

    /*
    const meals_with_menu_id = result.map((meal) => {
      const menu_id = meal.menu.id;
      delete meal.menu;
      return { menu_id: menu_id, ...meal };
    });
    */
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}
async function insert(req, res) {
  if (!req.userId) {
    return res.status(403).json({ message: 'Unauthenticated' });
  }

  const { body: meal } = req;
  delete meal.id;
  meal.price = Number(meal.price);
  meal.menu_id = Number(meal.menu_id);

  try {
    const result = await MealRepo.insert(meal);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}
async function remove(req, res) {
  if (!req.userId) {
    return res.status(403).json({ message: 'Unauthenticated' });
  }

  const { id } = req.params;

  if (Number.isNaN(Number(id)))
    return res.status(404).send(`No meal with id: ${id}`);

  try {
    const result = await MealRepo.remove(Number(id));
    if (result) return res.status(200).send('Post deleted successfully.');

    return res.status(404).send(`No meal with id: ${id}`);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}

async function get(req, res) {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.sendStatus(400);
  try {
    const result = await MealRepo.get(Number(id));
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: erroror.message });
  }
}

async function searchByName(req, res) {
  const { searchQuery } = req.query;
  try {
    const name = searchQuery;
    const result = await MealRepo.search(name);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

async function getPage(req, res) {
  const { page } = req.query;
  try {
    const LIMIT = 4;
    let result = await MealRepo.fetchPage(page, LIMIT);
    result.currentPage = Number(page);
    result.numberOfPages = Math.ceil(result.total / LIMIT);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

async function getAllGroceries(req, res) {
  const { id } = req.params;
  try {
    const result = await MealRepo.getAllGroceries(id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
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
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}
