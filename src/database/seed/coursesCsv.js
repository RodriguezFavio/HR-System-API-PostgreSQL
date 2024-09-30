const pool = require('../db');
const path = require('path');

const loadDataCourses = async () => {
  try {
    const filePath = path.join(__dirname, '..', 'data', 'courses.csv');
    await pool.query('BEGIN');

    const coursesQuery = `
      COPY courses(id,title,date,trainer_id)
      FROM '${filePath}'
      WITH (FORMAT csv, HEADER true)`;

    await pool.query(coursesQuery);

    await pool.query('COMMIT');
    console.log('done');
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error(error);
  }
};

module.exports = loadDataCourses;
