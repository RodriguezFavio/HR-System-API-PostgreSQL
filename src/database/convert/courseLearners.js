const path = require('path');
const fs = require('fs');
const convertJsonToCsv = require('../../utils/convertJsonToCsv');

const jsonFilePath = path.join(__dirname, '..', 'data', 'courses.json');
const csvFilePath = path.join(__dirname, '..', 'data', 'courseLearners.csv');
const courseLearnerData = [];

const courseLearnersCsv = async () => {
  try {
    const courses = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8')).courses;

    courses.forEach((course) => {
      const filterLearners = [...new Set(course.learners)];

      filterLearners.forEach((learnerId) => {
        courseLearnerData.push({ course_id: course.id, learner_id: learnerId });
      });
    });

    const csv = convertJsonToCsv(
      courseLearnerData,
      ['course_id', 'learner_id'],
      csvFilePath
    );
    return csv;
  } catch (err) {
    console.log(err);
  }
};

module.exports = courseLearnersCsv;
