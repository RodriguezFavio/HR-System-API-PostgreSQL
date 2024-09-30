const path = require('path');
const fs = require('fs');
const convertJsonToCsv = require('../../utils/convertJsonToCsv');

const jsonFilePath = path.join(__dirname, '..', 'data', 'courses.json');
const csvFilePath = path.join(__dirname, '..', 'data', 'courses.csv');

const coursesCsv = async () => {
  try {
    const courses = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8')).courses;
    const csv = convertJsonToCsv(
      courses,
      ['id', 'title', 'date', 'trainerId'],
      csvFilePath
    );
    return csv;
  } catch (err) {
    console.log(err);
  }
};

module.exports = coursesCsv;
