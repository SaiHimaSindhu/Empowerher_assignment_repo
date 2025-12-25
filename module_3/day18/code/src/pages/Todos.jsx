import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="page">
      <h1>Todos Page</h1>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="todo-list">
        {todos.map((todo) => (
          <Link
            key={todo.id}
            to={`/todos/${todo.id}`}
            className="todo-card"
          >
            <h3>{todo.title}</h3>
            <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Todos;
