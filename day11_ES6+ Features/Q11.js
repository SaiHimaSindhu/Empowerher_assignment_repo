// Arrow function equivalent with default parameters
const multiply = (a = 1, b = 1) => a * b;

// Examples
console.log(multiply(3, 4)); // 12
console.log(multiply());     // 1
console.log(multiply(5));    // 5  (5 * default 1)
