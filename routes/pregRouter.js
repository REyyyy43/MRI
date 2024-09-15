
const express = require('express');
const router = express.Router();

// Datos de ejemplo
const preguntasFrecuentes = [
  {
    pregunta: 'Que servicios ofrecen',
    respuesta: 'Empaquetado de alimentos, producción de alimentos para consumo animal, producción animal, logística y distribución.'
  },
  {
    pregunta: '¿Cuáles son sus numeros de contacto?',
    respuesta: 'Puede contactarnos al +1 234 567 8901 o info@example.com.'
  }
  // Agrega más preguntas y respuestas según sea necesario
];

router.get('/', (req, res) => {
  res.json(preguntasFrecuentes);
});

module.exports = router;