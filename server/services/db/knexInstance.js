const { NODE_ENV } = process.env;
const knex = require("knex");
const { knexSnakeCaseMappers } = require("objection");
const config = require("../../knexfile");

let instance;

module.exports = instance =
  NODE_ENV === "production"
    ? knex({ ...config.production, ...knexSnakeCaseMappers })
    : knex({ ...config.development, ...knexSnakeCaseMappers });
