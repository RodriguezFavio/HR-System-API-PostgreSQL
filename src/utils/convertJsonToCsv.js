const fs = require('fs');
const { parse } = require('json2csv');

const convertJsonToCsv = (data, fields, filePath) => {
  const opts = { fields };
  try {
    const csv = parse(data, opts);
    fs.writeFileSync(filePath, csv);
  } catch (err) {
    console.error(err);
  }
};

module.exports = convertJsonToCsv;
