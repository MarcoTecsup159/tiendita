const express = require('express');
const router = express.Router();

// Ejemplo de rutas para clientes
router.get('/', (req, res) => {
  res.send('Listado de clientes');
});

module.exports = router;
