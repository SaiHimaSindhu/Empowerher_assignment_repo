// Select elements
const colorInput = document.getElementById("colorInput");
const textInput = document.getElementById("textInput");
const bgBtn = document.getElementById("bgBtn");
const textBtn = document.getElementById("textBtn");
const box = document.getElementById("outputBox");

// ------------ TASK 1: Change Background -------------
bgBtn.addEventListener("click", function () {
    const color = colorInput.value.trim();

    if (color === "") {
        alert("Please enter a color!");
        return;
    }

    // Try applying the color
    box.style.backgroundColor = color;

    // Check if browser accepted the color
    if (box.style.backgroundColor === "") {
        alert("Invalid color name!");
    }
});

// ------------ TASK 2: Update Text -------------
textBtn.addEventListener("click", function () {
    const newText = textInput.value.trim();

    if (newText === "") {
        alert("Please enter some text!");
        return;
    }

    box.textContent = newText;
});
