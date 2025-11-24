for (var i = 0; i < 3; i++) {}
console.log(i); // 3

for (let j = 0; j < 3; j++) {}
console.log(j); // ReferenceError: j is not defined

// Because 'const' ensures the variable binding cannot be reassigned, making code safer when reassignment is undesirable.
