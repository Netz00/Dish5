exports.seed = function (knex) {
  // Deletes ALL existing entries
  return (
    knex('menu')
      .del()
      .then(function () {
        // Inserts seed entries
        return knex('menu').insert([
          { id: 1, name: 'Juhe' },
          { id: 2, name: 'Topla predjela' },
          { id: 3, name: 'Glavna jela' },
          { id: 4, name: 'Deserti' },
          { id: 5, name: 'Hladna predjela' },
        ]);
      })
      // reinitialise id_sey after manually inserting id-s
      .then(function () {
        return knex.raw("select setval('menu_id_seq', max(id)) from menu");
      })
  );
};
