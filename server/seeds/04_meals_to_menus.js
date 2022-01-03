exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('menu_offer_meals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_offer_meals').insert([
        { meal_id: 1, menu_id: 5 },
        { meal_id: 2, menu_id: 1 },
        { meal_id: 3, menu_id: 1 },
        { meal_id: 4, menu_id: 2 },
        { meal_id: 5, menu_id: 2 },
        { meal_id: 6, menu_id: 2 },
        { meal_id: 7, menu_id: 3 },
        { meal_id: 8, menu_id: 3 },
        { meal_id: 9, menu_id: 3 },
        { meal_id: 10, menu_id: 4 },
        { meal_id: 11, menu_id: 4 },
        { meal_id: 12, menu_id: 3 },
        { meal_id: 13, menu_id: 5 },
        { meal_id: 14, menu_id: 5 },
        { meal_id: 15, menu_id: 5 },
        { meal_id: 16, menu_id: 4 },
        { meal_id: 17, menu_id: 4 },
        { meal_id: 18, menu_id: 4 },
        { meal_id: 19, menu_id: 4 },
        { meal_id: 20, menu_id: 1 },
        { meal_id: 21, menu_id: 1 },
        { meal_id: 22, menu_id: 1 },
        { meal_id: 23, menu_id: 1 },
        { meal_id: 24, menu_id: 3 },
        { meal_id: 25, menu_id: 2 },
        { meal_id: 26, menu_id: 2 },
        { meal_id: 27, menu_id: 2 },
        { meal_id: 28, menu_id: 3 },
        { meal_id: 29, menu_id: 5 },
      ]);
    });
};
