import React, { createContext, useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

export const TodoContext = createContext();

const Todos = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      <h1>Todo App</h1>
      <AddTodo />
      <TodoList />
    </TodoContext.Provider>
  );
};

export default Todos;
