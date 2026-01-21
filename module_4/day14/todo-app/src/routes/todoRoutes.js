import express from 'express';
import {
  getTodos,
  createTodo,
  removeTodo
} from '../controllers/todoController.js';

const router = express.Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.delete('/:id', removeTodo);

export default router;
