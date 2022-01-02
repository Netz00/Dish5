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
    //get array of menus with meals in subarray
    //const result = await MenuRepo.getAll();

    //get array of meals with menu_id for each meal
    const result = await MenuRepo.getAllMeals();

    const meals_with_menuId = [].concat.apply(
      [],
      result.map((menu) =>
        menu.meals.map((meal) => ({
          menu_id: menu.id,
          ...meal,
        }))
      )
    );

    return res.status(200).json(meals_with_menuId);
  } catch (err) {
    return res.status(404).json({ message: error.message });
  }
}
