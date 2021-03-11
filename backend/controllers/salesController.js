const router = require('express').Router();
const { Sales } = require('../models');
const auth = require('../middlewares/auth');

router.get('/', auth, async (_req, res) => {
  try {
    const sales = await Sales.findAll();
    if (sales.length < 1) {
      return res.status(200).json({ message: 'Nenhuma venda feita.' });
    }
    return res.status(200).json(sales);
  } catch (err) {
    return res.status(500).json({ message: 'Erro no servidor', err });
  }
});

router.post('/', auth, async (req, res) => {
  const { nome, email, endereco, pagamento } = req.body;
  const { id } = req.user;
  try {
    // const sale = await sales.create({
    //   user_id: id,
    //   total_price: totalPrice,
    //   delivery_address: deliveryAddress,
    //   delivery_number: deliveryNumber,
    //   sale_date: date,
    //   status,
    // });
    // //cria aa tabela salesProdut
    // cart.forEach(async (productCart) => {
    //   const { id: productId, quantity } = productCart;
    //   await salesProducts.create({
    //     sale_id: sale.id,
    //     product_id: productId,
    //     quantity,
    //   });
  } catch (err) {}
});

router.put('/', async (req, res) => {});
router.delete('/', async (req, res) => {});

module.exports = router;
