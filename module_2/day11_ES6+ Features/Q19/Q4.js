// Destructure to get a and b
const arr = [10, 20, 30];
const [a, b] = arr;
console.log(a, b); // 10 20

// Destructure object for brand
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand); // "Dell"

// Safely access using optional chaining
const info = {};
console.log(info?.brand); // undefined
