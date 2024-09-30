const path = require('path');
const fs = require('fs');
const convertJsonToCsv = require('../../utils/convertJsonToCsv');

const jsonFilePath = path.join(__dirname, '..', 'data', 'trainers.json');
const csvFilePath = path.join(__dirname, '..', 'data', 'trainers.csv');

const trainersCsv = async () => {
  try {
    const trainers = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8')).trainers;
    const csv = convertJsonToCsv(trainers, ['id', 'name'], csvFilePath);
    return csv;
  } catch (err) {
    console.log(err);
  }
};

module.exports = trainersCsv;
