// What is the output?
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // 20
console.log(x); // ReferenceError: x is not defined

// Access safely with optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email); // "test@mail.com"
console.log(profile?.user?.details?.phone); // undefined

// Optional chaining prevents runtime error
const data = {};

console.log(data.user.details.email);          // TypeError: Cannot read property 'details' of undefined
console.log(data?.user?.details?.email);       // undefined (no error)
