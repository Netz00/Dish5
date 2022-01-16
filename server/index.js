require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mealRoutes = require('./routes/meals.js');
const menuRoutes = require('./routes/menus.js');
const userRoutes = require('./routes/user.js');

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/meals', mealRoutes);
app.use('/menus', menuRoutes);
app.use('/users', userRoutes);

const { NODE_ENV } = process.env || 'development';

if (NODE_ENV === 'production') {
  const HTTP_PORT = process.env.HTTP_PORT || 80;

  const fs = require('fs');
  const http = require('http');
  const https = require('https');

  const privateKey = fs.readFileSync('privkey.pem', 'utf8');
  const certificate = fs.readFileSync('fullchain.pem', 'utf8');

  const credentials = { key: privateKey, cert: certificate };

  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(credentials, app);

  httpServer.listen(HTTP_PORT, () => {
    console.log(`HTTP app listening at http://localhost:${HTTP_PORT}`);
  });

  httpsServer.listen(PORT, () => {
    console.log(`HTTPS app listening at https://localhost:${PORT}`);
  });
} else {
  app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
}
