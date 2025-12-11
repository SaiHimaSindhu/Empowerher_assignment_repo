import { displayTodos } from "./displayTodos.js";

let loginStatus = localStorage.getItem("login");

if (!loginStatus) {
    alert("Please login first!");
    window.location.href = "login.html";
}

async function fetchTodos() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos");
    let data = await res.json();
    displayTodos(data);
}

fetchTodos();
