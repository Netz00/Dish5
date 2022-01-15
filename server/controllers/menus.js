const { MenuRepo } = require('../services/db');

module.exports = {
  get,
  getAll,
  deleteMenu,
  insertMenu,
};

async function getAll(req, res) {
  try {
    //get array of menus with meals in subarray
    const result = await MenuRepo.getAll();

    //get array of meals with menu_id for each meal
    /*
    const result = await MenuRepo.getAllMeals();

    const meals_with_menu_id = [].concat.apply(
      [],
      result.map((menu) =>
        menu.meals.map((meal) => ({
          menu_id: menu.id,
          ...meal,
        }))
      )
    );
    */
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}

async function deleteMenu(req, res) {
  if (!req.userId) {
    return res.status(403).json({ message: 'Unauthenticated' });
  }

  const { id } = req.params;

  if (Number.isNaN(Number(id)))
    return res.status(404).send(`No menu with id: ${id}`);

  try {
    const result = await MenuRepo.findByIdAndRemove(Number(id));
    if (result) return res.status(200).send('Menu deleted successfully.');

    return res.status(404).send(`No menu with id: ${id}`);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}

async function insertMenu(req, res) {
  if (!req.userId) {
    return res.status(403).json({ message: 'Unauthenticated' });
  }

  const { body: menu } = req;
  delete menu.id;

  try {
    const result = await MenuRepo.insert(menu);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
}

async function get(req, res) {
  const { id } = req.params;
  if (Number.isNaN(Number(id))) return res.sendStatus(400);
  try {
    const result = await MenuRepo.get(Number(id));
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
}
