import { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.slice(0, 10)); // first 10 todos
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ padding: "24px" }}>Loading todos...</p>;
  }

  return (
    <div style={{ padding: "24px" }}>
      <h2>Todos</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px",
              background: "#fff",
            }}
          >
            <h4>{todo.title}</h4>
            <p>
              Status:{" "}
              <strong>{todo.completed ? "completed" : "not completed"}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
