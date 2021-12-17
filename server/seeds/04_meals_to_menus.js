exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('menu_offer_meals')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_offer_meals').insert([
        { menu_id: 1, meal_id: 1 },
        { menu_id: 1, meal_id: 2 },
        { menu_id: 1, meal_id: 3 },
        { menu_id: 1, meal_id: 4 },

        { menu_id: 2, meal_id: 5 },
        { menu_id: 2, meal_id: 6 },
        { menu_id: 2, meal_id: 7 },
        { menu_id: 2, meal_id: 8 },

        { menu_id: 3, meal_id: 9 },
        { menu_id: 3, meal_id: 10 },
        { menu_id: 3, meal_id: 11 },
        { menu_id: 3, meal_id: 12 },
      ]);
    });
};
