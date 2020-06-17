const express = require('express');
const router = express.Router();
const upload = require('../helpers/uploadImage');
const uploadImage = upload.single('bookImage');
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/auth');

router.get('/', authMiddleware.levelUser, bookController.getAllBook);
router.get('/search', authMiddleware.levelUser, bookController.getSeacrhBook)
router.post('/', authMiddleware.levelAdmin, uploadImage ,bookController.postBook);
router.put('/:id', authMiddleware.levelAdmin, uploadImage ,bookController.patchBook);
router.delete('/:id', authMiddleware.levelAdmin, bookController.deleteBook);

router.post('/borrow', authMiddleware.levelUser, bookController.borrowBook);
router.put('/return/:id', authMiddleware.levelUser, bookController.returnBook);

module.exports = router;