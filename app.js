const express = require('express')
const morgan = require('morgan')
const app = express()

const bookRouter = require('./routes/book.routes')

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/v1/books', bookRouter)

module.exports = app