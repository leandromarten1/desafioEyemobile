const express = require('express');
const path = require('path')
const controllers = require('./controllers');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/', controllers.productController);
app.use('/login', controllers.loginController);
app.use('/checkout', (req, res) => res.json({message: 'Dados do formulario para salvar no DB'}))


const PORT = 3001;
app.listen(PORT, () => console.log('Rodando na porta ', PORT));
