const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.levelAdmin, authorController.getAllAuthor);
router.post('/', authMiddleware.levelAdmin, authorController.postAuthor);
router.put('/:id', authMiddleware.levelAdmin, authorController.putAuthor);
router.delete('/:id', authMiddleware.levelAdmin, authorController.deleteAuthor);

module.exports = router;