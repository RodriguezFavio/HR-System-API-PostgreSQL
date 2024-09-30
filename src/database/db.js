const { Pool } = require('pg');
require('dotenv').config();

const { DB_USERNAME, DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const USER = encodeURIComponent(DB_USERNAME);
const PASSWORD = encodeURIComponent(DB_PASSWORD);
const URI = `postgres://${USER}:${PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;
