const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('API de pesquisa de satisfação rodando!');
});

// Altere a porta para 3001
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});