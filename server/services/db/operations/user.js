const User = require('../models/user');

module.exports = {
  findOne,
  create,
};

function findOne(user) {
  return User.query().findOne({
    email: user.email,
  });
}

function create(user) {
  return User.query().insert(user);
}
