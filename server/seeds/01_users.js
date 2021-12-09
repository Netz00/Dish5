
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake1', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 2, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake2', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 3, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake3', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 4, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake4', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 5, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake5', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 6, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake6', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 7, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake7', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 8, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake8', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 9, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake9', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 10, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake10', firstname: 'Fake', lastname: 'User', type: 0},
        {id: 11, email: 'test@gmail.com', ip_addr: '192.168.0.1', password: 'test@gmail.com', username: 'fake11', firstname: 'Fake', lastname: 'User', type: 0},
      ]);
    });
};


