const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const { createClient } = require('@supabase/supabase-js');



// Create Todo
router.post('/', authMiddleware, async (req, res) => {
  const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    global: {
      headers: {
        Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}`
      }
    }
  }
);

  const { title } = req.body;

  const { error } = await supabase
    .from('todos')
    .insert([{ title, userId: req.user.userId }]);


  if (error) return res.status(500).json({ message: error.message });

  res.json({ message: 'Todo created' });
});

// Get Todos
router.get('/', authMiddleware, async (req, res) => {
    const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    global: {
      headers: {
        Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}`
      }
    }
  }
);

  const { data } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', req.user.userId);


  res.json(data);
});

// Update Todo
router.put('/:id', authMiddleware, async (req, res) => {
    const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    global: {
      headers: {
        Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}`
      }
    }
  }
);

  const { id } = req.params;
  const { completed } = req.body;

  const { error } = await supabase
    .from('todos')
    .update({ completed })
    .eq('id', id)
    .eq('userId', req.user.userId);


  if (error) return res.status(500).json({ message: error.message });

  res.json({ message: 'Todo updated' });
});

// Delete Todo
router.delete('/:id', authMiddleware, async (req, res) => {
    const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
  {
    global: {
      headers: {
        Authorization: `Bearer ${req.headers.authorization.split(' ')[1]}`
      }
    }
  }
);

  const { id } = req.params;

  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .eq('userId', req.user.userId);


  if (error) return res.status(500).json({ message: error.message });

  res.json({ message: 'Todo deleted' });
});

module.exports = router;
