
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('frontend'));

app.get('/api/status', (req, res) => {
  const fail = Math.random() < 0.3;
  if (fail) {
    res.status(500).json({ error: "Fallo simulado en el backend" });
  } else {
    res.json({ instance: `Instancia activa en el puerto ${PORT}` });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});
