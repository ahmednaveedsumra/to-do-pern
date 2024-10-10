const { user, password, database } = require("pg/lib/defaults");

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "ahmad09102",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});
module.exports  =pool;