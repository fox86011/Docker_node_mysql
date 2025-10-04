const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
  res.send('API backend funcionando');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Puerto
const PORT = process.env.PORT || 3000;

// Arranque
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
