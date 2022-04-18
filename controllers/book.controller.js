const Book = require('../models/book.model')

async function getBook(req,res){
    try {
        const bookId = req.params.bookId
        const book = await Book.find({
            _id: bookId
        })
    
        res.status(200).json({
            data :{
                status: "success",
                book
            }
        })
        
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            message: error,
       })
    }
}


async function getAllBooks(req,res){
   try{ const books = await Book.find({},{
        __v: 0,
    })

    res.status(200).json({
        data :{
            status: "success",
            books
         }
        })
    }catch(error){
        return res.status(404).json({
            status: "failed",
            message: error,
       })
    }
}

async function createBook(req,res){
    try {
        const book = await Book.create(req.body)
    
        res.status(201).json({
            data: {
                status: "success",
                book
            }
        })
        
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            message: error,
       })
    }
}

async function  updateBook(req,res){
    try {
        const bookId = req.params.bookId
        const book = await Book.findOneAndUpdate({
            _id: bookId,
        },
        req.body,{
            new: true,
            runValidators: true
        })
    
        res.status(201).json({
            data: {
                status: "success",
                book
            }
        })
        
    } catch (error) {
        return res.status(404).json({
            status: "failed",
            message: error,
       })
    }
}

async function deleteBook(req,res){
  try {
      
      const bookId = req.params.bookId
      const book =  await Book.findOneAndDelete({
          _id: bookId
      })
  
      if(!book){
          res.status(400).json({
              status:"Book not found in database!!"
          })
      }
  
      res.status(204).json({
          status:"success"
      })
  } catch (error) {
    return res.status(404).json({
        status: "failed",
        message: error,
   })
  }
}

module.exports = {
    getBook,
    getAllBooks,
    createBook,
    updateBook,
    deleteBook
}