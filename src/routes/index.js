const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');
const bookRouter = require('./books');
const authorRouter = require('./authors');
const genreRouter = require('./genres');
const authRouter = require('./auths');

router.use('/books', authMiddleware.verifyJwtToken, bookRouter);
router.use('/authors', authMiddleware.verifyJwtToken, authorRouter);
router.use('/genres', authMiddleware.verifyJwtToken, genreRouter);
router.use('/auth', authRouter);

module.exports = router;