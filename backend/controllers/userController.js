const router = require('express').Router();
const { User } = require('../models');
const auth = require('../middlewares/auth');
const bcrypt = require('bcrypt');

router.get('/', auth, async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.post('/', async (req, res) => {
  const { nome, email, password } = req.body;
  const salt = 10;
  try {
    bcrypt.hash(password, salt, async (err, hash) => {
      await User.create({ nome, email, password: hash });
    });
    return res.status(201).json({ message: 'Usuário Criado' });
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});
router.put('/', auth, async (req, res) => {});
router.delete('/', auth, async (req, res) => {});

module.exports = router;
