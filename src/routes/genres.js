const express = require('express');
const router = express.Router();
const genreController = require('../controllers/genreController');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.levelAdmin, genreController.getAllGenre);
router.post('/', authMiddleware.levelAdmin, genreController.postGenre);
router.put('/:id', authMiddleware.levelAdmin, genreController.putGenre);
router.delete('/:id', authMiddleware.levelAdmin, genreController.deleteGenre);

module.exports = router;