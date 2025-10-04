const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => res.send('API backend funcionando'));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

// Variables de entorno
const PORT = process.env.PORT || 3000;
const dbInfo = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  name: process.env.DB_NAME
};

// Log útil para verificar envs dentro del contenedor (no imprime passwords)
console.log('DB config ->', dbInfo);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Log útil al arrancar (sin exponer password en claro)
const safeEnv = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_NAME: process.env.DB_NAME
};
console.log('ENV SUMMARY =>', safeEnv);

// Endpoint para evidenciar en navegador
app.get('/env', (req, res) => res.json(safeEnv));
