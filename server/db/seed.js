import db from "./index.cjs";
import fs from "fs";
import path from "path";

const fileName = path.join(process.cwd(), "db", "seed.sql");

export const seed = (req, res) => {
  // Extract SQL queries from files. Assumes no ';' in the fileNames
  var queries = fs
    .readFileSync(fileName)
    .toString()
    .replace(/(\r\n|\n|\r)/gm, " ") // remove newlines
    .replace(/\s+/g, " ") // excess white space
    .split(";") // split into all statements
    .map(Function.prototype.call, String.prototype.trim)
    .filter(function (el) {
      return el.length != 0;
    }); // remove any empty ones

  var promises = queries.map(function (query) {
    return new Promise((resolve, reject) => {
      return db.query(query, null, (err, rest) => {
        res.write(`\n\nTable ${query}\n`);
        if (err === undefined) {
          res.write("Seed success!");
          resolve();
        } else {
          res.write("Seed NOT success!");
          reject();
        }
      });
    });
  });
  Promise.allSettled(promises).then(() => res.send());
};
