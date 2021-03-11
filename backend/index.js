const express = require('express');
const path = require('path')
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (_req, res) => res.send('Hello World'));

const PORT = 3001;
app.listen(PORT, () => console.log('Rodando na porta ', PORT));
