const pool = require('../db');
const path = require('path');

const loadDataCourseLearners = async () => {
  try {
    const filePath = path.join(__dirname, '..', 'data', 'courseLearners.csv');
    await pool.query('BEGIN');

    const courseLearnersQuery = `
      COPY course_learners(course_id, learner_id)
      FROM '${filePath}'
      WITH (FORMAT csv, HEADER true)`;

    await pool.query(courseLearnersQuery);

    await pool.query('COMMIT');
    console.log('done');
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error(error);
  }
};

module.exports = loadDataCourseLearners;
