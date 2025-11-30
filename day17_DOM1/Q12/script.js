// Select the UL
const ul = document.querySelector("#item-list");

// Select button
const btn = document.getElementById("add-btn");

// Add click event
btn.addEventListener("click", function () {

    // Create new li
    const newLi = document.createElement("li");
    newLi.textContent = "New Item";

    // Determine the index (after adding)
    const index = ul.children.length + 1;

    // Apply styles
    if (index % 2 !== 0) {
        // Odd index -> bold + blue
        newLi.style.fontWeight = "bold";
        newLi.style.color = "blue";
    } else {
        // Even index -> italic + red
        newLi.style.fontStyle = "italic";
        newLi.style.color = "red";
    }

    // Append to UL
    ul.appendChild(newLi);
});
