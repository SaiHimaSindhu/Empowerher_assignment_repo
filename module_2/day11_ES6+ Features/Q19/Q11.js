const arr = [3, 4, 5];
const clone = [...arr];
console.log(clone);

const arr2 = [3, 4, 5];
const newArr = [100, ...arr2];
console.log(newArr); // [100, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 5, c: 7 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 5, c: 7 }
