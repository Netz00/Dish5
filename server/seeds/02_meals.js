exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meal')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('meal').insert([
        { name: 'Meal1', price: 10 },
        { name: 'Meal2', price: 20 },
        { name: 'Meal3', price: 30 },
        { name: 'Meal4', price: 40 },
        { name: 'Meal5', price: 50 },
        { name: 'Meal6', price: 60 },
        { name: 'Meal7', price: 70 },
        { name: 'Meal8', price: 80 },
        { name: 'Meal9', price: 90 },
        { name: 'Meal10', price: 100 },
        { name: 'Meal11', price: 110 },
        { name: 'Meal12', price: 120 },
      ]);
    });
};
