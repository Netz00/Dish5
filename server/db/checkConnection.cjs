const db = require("./index.cjs");
require("dotenv").config();

const connectionStatus = (req, res) => {
  console.log(`Connecting to database...
    Host: ${process.env.PGHOST}
    Port: ${process.env.PGPORT}
    Database: ${process.env.PGDATABASE}
    Username: ${process.env.PGUSER}
    Password: ${process.env.PGPASSWORD}\n`);

  const rows = db.query("SELECT NOW()", null, (err, res) => {
    if (err === undefined)
      console.log(`Conncetion successfull, DB time: ${res.rows[0].now}`);
    else console.log(err, res);
  });
};

module.exports = connectionStatus;
