import { useState } from "react";
import TodosList from "./TodosList";

export default function App() {
  const [showTodos, setShowTodos] = useState(true);

  const handleUnmount = () => {
    setShowTodos(false); // unmount TodosList
  };

  return (
    <div>
      <button onClick={handleUnmount}>Unmount Todos</button>
      {showTodos && <TodosList />}
    </div>
  );
}

