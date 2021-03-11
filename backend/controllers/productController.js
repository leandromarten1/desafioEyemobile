const router = require('express').Router();
const { Product } = require('../models');

// Get all products
router.get('/', async (_req, res) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

module.exports = router;
