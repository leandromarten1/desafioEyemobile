const router = require('express').Router();
// const { Sale } = require('../models');
const auth = require('../middlewares/auth');

router.get('/', auth, async (_req, res) => {
  try {
    return res.status(200).json({message: 'Sales controller'});
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.post('/', auth, async (req, res) => {})
router.put('/', auth, async (req, res) => {})
router.delete('/', auth, async (req, res) => {})

module.exports = router;
