import { useEffect, useState } from "react";

function TodoCard({ userId, title, completed }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "8px 0",
        padding: "8px",
      }}
    >
      <p>User: {userId}</p>
      <p>Title: {title}</p>
      <p>Completed: {completed ? "Yes" : "No"}</p>
    </div>
  );
}

export default function TodosList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (!ignore) {
          setTodos(data.slice(0, 15)); // first 15 todos
        }
      });

    return () => {
      ignore = true;
      alert("cleanup worked");
    };
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
