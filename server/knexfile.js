// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: process.env.CLIENT,
    connection: {
      port: process.env.DB_PORT,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: process.env.CLIENT,
    connection: {
      port: process.env.DB_PORT,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: process.env.CLIENT,
    connection: {
      port: process.env.DB_PORT,
      host: process.env.POSTGRES_HOST,
      database: process.env.DATABASE,
      user: process.env.USER,
      password: process.env.PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
