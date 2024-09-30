const pool = require('../db');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'trainers.csv');

const loadDataTrainers = async () => {
  try {
    await pool.query('BEGIN');

    const trainersQuery = `
    COPY trainers(id,name)
    FROM '${filePath}'
    WITH (FORMAT csv, HEADER true)`;

    await pool.query(trainersQuery);

    await pool.query('COMMIT');
    console.log('done!');
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error(error);
  }
};

module.exports = loadDataTrainers;
