const supabase = require('../config/db');

exports.createTodo = async (req, res) => {
  const { title, description, userId } = req.body;

  if (!title || !userId)
    return res.status(400).json({ error: "Title and userId required" });

  const { data, error } = await supabase
    .from('todos')
    .insert([{ title, description, user_id: userId }]);

  if (error)
    return res.status(400).json({ error: error.message });

  res.status(201).json({ message: "Todo created", data });
};

exports.getUserTodos = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', userId);

  if (error)
    return res.status(400).json({ error: error.message });

  res.json(data);
};

exports.updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { title, description, is_completed } = req.body;

  const { data, error } = await supabase
    .from('todos')
    .update({ title, description, is_completed })
    .eq('id', todoId);

  if (error)
    return res.status(400).json({ error: error.message });

  res.json({ message: "Todo updated", data });
};

exports.deleteTodo = async (req, res) => {
  const { todoId } = req.params;

  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', todoId);

  if (error)
    return res.status(400).json({ error: error.message });

  res.json({ message: "Todo deleted" });
};
