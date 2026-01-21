import * as TodoModel from '../models/todoModel.js';

export const getTodos = async (req, res) => {
  try {
    const todos = TodoModel.getAllTodos();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const newTodo = TodoModel.addTodo(title);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const removeTodo = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const isDeleted = TodoModel.deleteTodo(id);

    if (!isDeleted) {
      return res.status(404).json({ message: 'Todo not found' });
    }

    res.status(200).json({ message: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
