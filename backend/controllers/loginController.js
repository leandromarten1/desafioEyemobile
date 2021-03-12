const router = require('express').Router();
const { User } = require('../models');
const createToken = require('../middlewares/createToken');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  try {
    if (!user) {
      return res.status(401).json({ message: 'Usuário não cadastrado' });
    }
  
    const { password: pwd, ...userData } = user.dataValues;

    bcrypt.compare(password, pwd, (err, result) => {
      if(!result) {
        return res.status(401).json({ message: 'Senha incorreta' });
      }
      if (user && result) {
        const token = createToken(userData);
        return res.status(200).json({ token, userData });
      }
      
    })
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

module.exports = router;
