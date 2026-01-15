const fs = require("fs");
const path = require("path");

function readData() {
  const filePath = path.join(__dirname, "Data.txt");
  return fs.readFileSync(filePath, "utf8");
}

module.exports = readData;
