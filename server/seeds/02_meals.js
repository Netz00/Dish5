exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meal')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('meal').insert([
        { id: 1, name: 'Carpaccio od tune', price: 60, description: 'Poznato jelo od sirove tune narezane na tanke komadiće posluženo uz listove zelene salate.' },
        { id: 2, name: 'Riblja juha', price: 30, description: 'Juha s komadićima ribe i rižom' },
        { id: 3, name: 'Krem juha od kozica', price: 35, description: 'Gusta juha bogatog okusa s komadima kozica.' },
        { id: 4, name: 'Rižoto sa škampima', price: 90, description: 'Umak od repova škampa, cherry rajčica, krema od peršina, riža' },
        { id: 5, name: 'Crni rižoto od sipe', price: 80, description: 'Umak od sipe sa sipinim crnilom, krema od maslinovog ulja, riža' },
        { id: 6, name: 'Teleći rižoto', price: 70, description: 'Umak od telećeg mesa, riža' },
        { id: 7, name: 'Biftek na žaru', price: 180, description: 'Steak od junećeg filea na žaru, pečeni krumpir' },
        { id: 8, name: 'Ravioli s tikvicama i gljivama', price: 70, description: 'Domaća šalša od pamidora, ravioli sa tikvicama i gljivama, vegetarijansko jelo' },
        { id: 9, name: 'Burger dish5', price: 65, description: '100% juneće meso iz domaćeg uzgoja 180g, pržena slanina, iceberg salata, cherry rajčice, kiseli krastavci, umak dish5' },
        { id: 10, name: 'Čokoladna torta', price: 25, description: 'Kolač aromatiziran rastopljenom čokoladom i kakaom u prahu' },
        { id: 11, name: 'Cheesecake', price: 25, description: 'Mješavine kreme od mekog, svježeg sira i donjeg sloja izrađenog od zdrobljenih kolačića' },
        { id: 12, name: 'Lasagane Bolognese', price: 70, description: 'Tjestenina sa 100% goveđim mesom iz domađeg uzgoja, parmezan i grana padano sir, umak bolognese, umak bechamel ' },
        { id: 13, name: 'Caesar salata', price: 55, description: 'Pileća prsa iz domaćeg uzgoja, zelena salata, umak Caesar, parmezan,sjemenke sezama, dresing' },
        { id: 14, name: 'Avocado tost', price: 55, description: 'Integralni kruh, avocado, jaje na oko, cherry rajčice, crveni luk, blitva' },
        { id: 15, name: 'Caprese salata', price: 55, description: 'Rajčica, mozzarella, lovor, domaće maslinovo ulje, aceto balsamico' },
        { id: 16, name: 'Tiramisu', price: 20, description: 'Piškote, kava, krema od bjelanjaka ' },
        { id: 17, name: 'Panna Cotta', price: 22, description: 'Kokosovo mlijeko, slatko vrhnje, želatina od kupine' },
        { id: 18, name: 'Dalmatinska rožata', price: 22, description: 'Tradicionalna dubrovačka rožata s likerom od ruža i preljevom od karamele' },
        { id: 19, name: 'Lava cake', price: 25, description: 'Popularna poslastica koja će zadovoljiti sve ljubitelje čokolade' },
        { id: 20, name: 'Juha od rajčice', price: 30, description: 'Krem juha od dalmatinskih rajčica s dodatkom bosiljka,luka i bijelog vina' },
        { id: 21, name: 'Krem juha od bundeve', price: 30, description: 'Kremasta juha u kombinaciji bundeve,mrkve i krumpira  idealna za jesenske dane' },
        { id: 22, name: 'Dnevna juha', price: 30, description: 'Tradicionalna juha bogata raznolikim povrćem kao stvorena za svaki dan' },
        { id: 23, name: 'Juha od gljiva', price: 30, description: 'Jednostavna krem juha sa šampinjonima i peršinom' },
        { id: 24, name: 'Škampi', price: 90, description: 'Škampi pripremljeni po dalmatinski na buzaru' },
        { id: 25, name: 'Špageti Bolognese', price: 45, description: 'Ukusni špageti u umaku bolognese po tradicionalnoj talijanskoj recepturi' },
        { id: 26, name: 'Špageti Carbonara', price: 50, description: 'Carbonara špageti po rimskoj tradiciji' },
        { id: 27, name: 'Fettucini Alfredo s kozicama', price: 60, description: 'Tjestenina Fettucini Alfredo s jadranskim kozicama' },
        { id: 28, name: 'Lasagne dish5', price: 75, description: 'Jedinstvene lasagne u bijelom umaku sa špinatom i feta sirom' },
        { id: 29, name: 'Hladna plata', price: 80, description: 'Pršut sušen na dalmatinskoj buri, paški sir, slavonski kulen i kobasica, domaći kruh ispod peke, domaće maslinovo ulje, masline' },
      ]);
    })
    // reinitialise id_sey after manually inserting id-s
    .then(function () {
      return knex.raw("select setval('meal_id_seq', max(id)) from meal");
    });
};
