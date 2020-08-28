const express = require('express');
const router = express.Router();
const upload = require('../helpers/uploadImage');
const uploadImage = upload.single('bookImage');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.levelUser, bookController.getAllBook);
router.get('/search', authMiddleware.levelUser, bookController.getSeacrhBook);
router.get('/history/:username', authMiddleware.levelUser, bookController.historyBorrows);
router.get('/:id', authMiddleware.levelUser, bookController.getBookById);
router.post('/', authMiddleware.levelAdmin, uploadImage ,bookController.postBook);
router.post('/borrow', authMiddleware.levelUser, bookController.borrowBook);
router.put('/:id', authMiddleware.levelAdmin, uploadImage ,bookController.putBook);
router.patch('/return', authMiddleware.levelUser, bookController.returnBook);
router.delete('/:id', authMiddleware.levelAdmin, bookController.deleteBook);



module.exports = router;