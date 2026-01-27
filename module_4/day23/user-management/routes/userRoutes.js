const express = require('express');
const router = express.Router();

const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const validateUser = require('../validations/userValidation');

router.post('/', validateUser, createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', validateUser, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
