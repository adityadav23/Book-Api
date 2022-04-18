const  mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter book name!"],
        minlength:5,
    },
    writer: {
        type: String,
        default: "XYZ"
    },
    publisher: {
        type: String,
        default: "Abc Publications"
    },
    pages: {
        type: Number,
        required: [true, "Please enter number of pages"]
    },
})

module.exports = mongoose.model('Book', bookSchema)