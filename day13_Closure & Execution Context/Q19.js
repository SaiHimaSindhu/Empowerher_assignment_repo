// 1. Declare a global variable 'age' and assign a value to it
let age = 25;

// 2. Create a function 'displayAge' that logs the value of 'age'
function displayAge() {
    console.log("Current age:", age);
}

// 3. Create a second function 'changeAge', which changes the value of 'age'
function changeAge() {
    age = 30;
    console.log("Age after updating:", age);
}

// 4. Call displayAge and changeAge, and check how the value of 'age' is updated
displayAge();    // Output: Current age: 25
changeAge();     // Output: Age after updating: 30
displayAge();    // Output: Current age: 30
