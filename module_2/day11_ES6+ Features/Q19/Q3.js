// Use spread to make a shallow copy
const product = { name: "Pen", price: 10 };
const copy = { ...product };
console.log(copy);

// Merge two objects using spread
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// Function using rest operator, returns largest
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(1, 5, 3)); // 5
