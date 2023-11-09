const config = require("../../../knexFile");
const knex = require("knex");
const connection = knex(config.development);
module.exports = connection;