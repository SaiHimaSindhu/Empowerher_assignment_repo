const express = require("express");
const app = express();
const PORT = 3000;

// Home route
app.get("/home", (req, res) => {
  res.json("This is home page");
});

// Contact route
app.get("/contactus", (req, res) => {
  res.json("Contact us at contact@contact.com");
});

// Bonus route
app.get("/about", (req, res) => {
  res.json("Welcome to the About page!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
