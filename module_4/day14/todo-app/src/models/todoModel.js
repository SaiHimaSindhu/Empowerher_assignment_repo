let todos = [];

export const getAllTodos = () => {
  return todos;
};

export const addTodo = (title) => {
  const newTodo = {
    id: Date.now(),
    title,
    completed: false
  };
  todos.push(newTodo);
  return newTodo;
};

export const deleteTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return false;

  todos.splice(index, 1);
  return true;
};
