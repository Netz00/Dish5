import db from "../db/index.cjs";

export const getMeals = (req, res) => {
  const rows = db.query("SELECT NOW()",null, (err, rest) => {
    res.send({err,rest});
  });
};
