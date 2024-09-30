const path = require('path');
const fs = require('fs');
const convertJsonToCsv = require('../../utils/convertJsonToCsv');

const jsonFilePath = path.join(__dirname, '..', 'data', 'learners.json');
const csvFilePath = path.join(__dirname, '..', 'data', 'learners.csv');

const learnersCsv = async () => {
  try {
    const learners = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8')).learners;
    const csv = convertJsonToCsv(learners, ['id', 'name'], csvFilePath);
    return csv;
  } catch (err) {
    console.log(err);
  }
};

module.exports = learnersCsv;
