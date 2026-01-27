const supabase = require('../config/db');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ error: "All fields required" });

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, email, password }]);

  if (error)
    return res.status(400).json({ error: error.message });

  res.status(201).json({ message: "User created", data });
};
