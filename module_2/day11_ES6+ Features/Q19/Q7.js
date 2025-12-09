// Add elements 4, 5 using spread
const nums = [1,2,3];
const numsExtended = [...nums, 4, 5];
console.log(numsExtended); // [1,2,3,4,5]

// Combine arrays using spread
const a = ["x", "y"];
const b = ["z"];
const combined = [...a, ...b];
console.log(combined); // ["x", "y", "z"]

// Function using rest to return array
const printNames = (...names) => names;
console.log(printNames("A", "B", "C")); // ["A", "B", "C"]
