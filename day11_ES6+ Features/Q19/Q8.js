// Destructure the following
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id); // 101
console.log(status); // "active"

// Convert this object to shorthand
const id = 101;
const role = "admin";
const userObj = { id, role };
console.log(userObj); // {id: 101, role: "admin"}

// Object with shorthand and method
const product = {
  name: "Book",
  price: 100,
  show() {
    console.log(`${this.name}: ${this.price}`);
  }
};
product.show(); // "Book: 100"
