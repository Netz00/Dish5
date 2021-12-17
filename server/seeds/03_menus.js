exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('menu')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('menu').insert([
        { id: 1, title: 'menu1' },
        { id: 2, title: 'menu2' },
        { id: 3, title: 'menu3' },
      ]);
    });
};
