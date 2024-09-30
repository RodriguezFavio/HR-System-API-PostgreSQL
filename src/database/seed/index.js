const loadDataCourses = require('./coursesCsv');
const loadDataLearners = require('./learnersCsv');
const loadDataTrainers = require('./trainersCsv');
const loadDataCourseLearners = require('./courseLearnersCsv');

const seed = async () => {
  await loadDataLearners();
  await loadDataTrainers();
  await loadDataCourses();
  await loadDataCourseLearners();
};

seed();
