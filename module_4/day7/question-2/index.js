const boxen = require("boxen");

// Message and Title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default)
const classicBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
});

// 2. SingleDouble
const singleDoubleBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble",
});

// 3. Round
const roundBox = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "round",
});

// Print all styles
console.log(classicBox);
console.log(singleDoubleBox);
console.log(roundBox);
