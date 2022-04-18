const express = require('express')

const {getBook,
    getAllBooks,
    createBook,
    updateBook,
    deleteBook,
    } = require('../controllers/book.controller')

const router = express.Router()

router.route('/').get(getAllBooks).post(createBook)
router.route('/:bookId').get(getBook).patch(updateBook).delete(deleteBook)


module.exports = router