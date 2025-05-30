const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const instanceName = process.env.INSTANCE_NAME || 'Instancia 1';

app.get('/', (req, res) => {
  res.send('Backend activo. Usa /api/status para ver estado.');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', instance: instanceName });
});

app.listen(port, () => {
  console.log(`Servidor ${instanceName} corriendo en puerto ${port}`);
});