const user = { name: "Alex", address: { city: "Bangalore" } };
console.log(user?.address?.city); // "Bangalore"

console.log(user?.job?.title); // undefined

const student = {};
console.log(student?.profile?.marks); // undefined
// Without optional chaining: student.profile.marks would throw an error.
