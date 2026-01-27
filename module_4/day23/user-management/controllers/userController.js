const supabase = require('../supabaseClient');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password, age, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          name,
          email,
          password: hashedPassword,
          age,
          role: role || 'user'
        }
      ])
      .select(); // return inserted row

    if (error) throw error;

    res.status(201).json({ message: 'User created', data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUsers = async (req, res) => {
  const { data, error } = await supabase.from('users').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};

exports.getUserById = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();

  if (error) return res.status(404).json({ error: 'User not found' });

  res.json(data);
};

exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, age, role } = req.body;

  const { data, error } = await supabase
    .from('users')
    .update({ name, email, age, role })
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: 'User updated', data });
};

exports.deleteUser = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('users')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });

  res.json({ message: 'User deleted' });
};
