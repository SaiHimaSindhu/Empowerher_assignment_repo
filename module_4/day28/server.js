require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

app.post('/signup', async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    if (!name || !email || !age || !location || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // 🔍 Check email first
    const { data: existingUser } = await supabase
      .from('users')
      .select('email')
      .eq('email', email)
      .single();

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase
      .from('users')
      .insert([{ name, email, age, location, password: hashedPassword }]);

    if (error) {
      return res.status(500).json({ message: error.message });
    }

    res.json({ message: 'User registered successfully' });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get('/myprofile', async (req, res) => {
  try {
    const { name } = req.query;

    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }

    const { data, error } = await supabase
        .from('users')
        .select('id, name, email, age, location')
        .ilike('name', `%${name}%`);

    if (error) {
        return res.status(500).json({ message: error.message });
    }

    if (!data || data.length === 0) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(data[0]);   // return first match


    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});

