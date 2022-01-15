const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { UserRepo } = require('../services/db');
require('dotenv').config();
module.exports = {
  signin,
  signup,
};

async function signin(req, res) {
  const { email, password } = req.body;

  try {
    const oldUser = await UserRepo.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { email: oldUser.email, id: oldUser.id },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRATION,
      }
    );

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.log(error);

  }
}

async function signup(req, res) {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserRepo.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserRepo.create({
      email,
      password: hashedPassword,
      username: `${firstName} ${lastName}`,
      ip_addr: req.socket.remoteAddress,
      firstname: firstName,
      lastname: lastName,
      type: 0,
      last_authorize: new Date(),
    });

    delete result.password;

    const token = jwt.sign(
      { email: result.email, id: result.id },
      process.env.JWT_SECRET,
      {
        expiresIn: JWT_EXPIRATION,
      }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });

    console.log(error);
  }
}
