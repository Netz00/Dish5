exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          email: 'test1@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake1',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test2@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake2',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test3@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake3',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test4@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake4',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test5@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake5',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test6@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake6',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test7@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake7',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test8@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake8',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test9@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake9',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test10@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake10',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
        {
          email: 'test11@gmail.com',
          ip_addr: '192.168.0.1',
          password: 'test@gmail.com',
          username: 'fake11',
          firstname: 'Fake',
          lastname: 'User',
          type: 0,
        },
      ]);
    });
};
