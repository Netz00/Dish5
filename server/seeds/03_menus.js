exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('menu')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        { name: 'menu1' },
        { name: 'menu2' },
        { name: 'menu3' },
      ]);
    });
};
