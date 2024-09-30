const pool = require('../db');
const path = require('path');

const loadDataLearners = async () => {
  try {
    const filePath = path.join(__dirname, '..', 'data', 'learners.csv');

    await pool.query('BEGIN');

    const learnerQuery = `
      COPY learners(id,name)
      FROM '${filePath}'
      WITH (FORMAT csv, HEADER true)`;

    await pool.query(learnerQuery);

    await pool.query('COMMIT');
    console.log('done!');
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error(error);
  }
};

module.exports = loadDataLearners;
