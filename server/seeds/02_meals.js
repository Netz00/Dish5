exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meal')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('meal').insert([
        { id: 1, title: 'Meal1', price: 10 },
        { id: 2, title: 'Meal2', price: 20 },
        { id: 3, title: 'Meal3', price: 30 },
        { id: 4, title: 'Meal4', price: 40 },
        { id: 5, title: 'Meal5', price: 50 },
        { id: 6, title: 'Meal6', price: 60 },
        { id: 7, title: 'Meal7', price: 70 },
        { id: 8, title: 'Meal8', price: 80 },
        { id: 9, title: 'Meal9', price: 90 },
        { id: 10, title: 'Meal10', price: 100 },
        { id: 11, title: 'Meal11', price: 110 },
        { id: 12, title: 'Meal12', price: 120 },
      ]);
    });
};
