const express = require('express');
const Game = require('../models/gameModel');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware para verificar token
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).json({ error: 'Token no proporcionado' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Token no válido' });
    req.userId = decoded.userId;
    next();
  });
};

// Obtener juegos del usuario
router.get('/', authMiddleware, async (req, res) => {
  const games = await Game.find({ userId: req.userId });
  res.status(200).json(games);
});

// Agregar un nuevo juego
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, genre } = req.body;
  const newGame = new Game({ title, description, genre, userId: req.userId });

  try {
    await newGame.save();
    res.status(201).json(newGame);
  } catch (err) {
    res.status(400).json({ error: 'Error al agregar el juego', message: err.message });
  }
});

// Eliminar un juego
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Game.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Juego eliminado' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar el juego', message: err.message });
  }
});

module.exports = router;