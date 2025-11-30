// 1. Select <h1> by id and change text
const heading = document.getElementById("main-heading");
heading.textContent = "Welcome to the DOM World!!";

// 2. Select all <p> and set text color to blue
const paragraphs = document.getElementsByTagName("p");
for (let p of paragraphs) {
    p.style.color = "blue";
}

// 3. Select first <div> with class 'container' and set background yellow
const containerDiv = document.querySelector(".container");
containerDiv.style.backgroundColor = "yellow";
