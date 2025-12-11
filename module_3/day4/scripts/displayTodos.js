export function displayTodos(data) {
    let container = document.getElementById("todos");
    container.innerHTML = "";

    data.forEach(todo => {
        let div = document.createElement("div");
        div.style.border = "1px solid gray";
        div.style.padding = "10px";
        div.style.margin = "10px";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
        `;

        container.appendChild(div);
    });
}
