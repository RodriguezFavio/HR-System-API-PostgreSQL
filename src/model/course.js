const pool = require('../database/db');

class Course {
  constructor(id, title, date, trainerId, learnersIds) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.trainerId = trainerId;
    this.learnersIds = learnersIds;
  }

  static async findById(id) {
    const courseQuery = `
    SELECT 
      c.id , 
      c.title, 
      c.date,
      json_build_object(
        'id', t.id,
        'name', t.name
      ) AS trainer,
      json_agg(
        json_build_object(
          'id', l.id,
          'name', l.name
        )
      ) AS learners
    FROM courses c
    JOIN trainers t ON c.trainer_id = t.id
    LEFT JOIN course_learners cl ON c.id = cl.course_id
    LEFT JOIN learners l ON cl.learner_id = l.id
    WHERE c.id = $1
    GROUP BY c.id, c.title, c.date, t.id, t.name
    `;

    const result = await pool.query(courseQuery, [id]);
    return result.rows[0];
  }
}

module.exports = Course;
