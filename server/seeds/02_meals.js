
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meal').del()
    .then(function () {
      // Inserts seed entries
      return knex('meal').insert([
        {id: 1, title: 'Meal1', description: 'Delicious meal for everyones taste.', price: 10},
        {id: 2, title: 'Meal2', description: 'Delicious meal for everyones taste.', price: 20},
        {id: 3, title: 'Meal3', description: 'Delicious meal for everyones taste.', price: 30},
        {id: 4, title: 'Meal4', description: 'Delicious meal for everyones taste.', price: 40},
        {id: 5, title: 'Meal5', description: 'Delicious meal for everyones taste.', price: 50},
        {id: 6, title: 'Meal6', description: 'Delicious meal for everyones taste.', price: 60},
        {id: 7, title: 'Meal7', description: 'Delicious meal for everyones taste.', price: 70},
        {id: 8, title: 'Meal8', description: 'Delicious meal for everyones taste.', price: 80},
        {id: 9, title: 'Meal9', description: 'Delicious meal for everyones taste.', price: 90},
        {id: 10,  title: 'Meal10', description: 'Delicious meal for everyones taste.', price: 100},
        {id: 11,  title: 'Meal11', description: 'Delicious meal for everyones taste.', price: 110},
      ]);
    });
};
