// Convert to arrow function
const square = n => n * n;

// Why does this code log undefined?
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); // logs undefined

// Rewrite so printing works
const obj = {
  value: 50,
  test: function() { console.log(this.value); }
};
obj.test(); // logs 50
