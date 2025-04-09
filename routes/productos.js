const express = require('express');
const router = express.Router();

// Ejemplo de rutas para productos
router.get('/', (req, res) => {
  res.send('Listado de productos');
});

module.exports = router;
