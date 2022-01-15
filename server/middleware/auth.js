const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  auth,
};

async function auth(req, res, next) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    const isCustomAuth = token?.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(409).json({ message: error.message });
  }
}
