const express = require('express');
const app = express();
const port = 9000;

// Importar rutas
const clientesRoute = require('./routes/clientes');
const productosRoute = require('./routes/productos');

// Middleware para usar las rutas
app.use('/clientes', clientesRoute);
app.use('/productos', productosRoute);

// Ruta raíz
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

