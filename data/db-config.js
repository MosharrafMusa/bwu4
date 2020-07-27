const knex = require("knex");
const dbEnv = process.env.DB_ENV;
const config = require("../knexfile")[dbEnv];

module.exports = require("knex")(config);
