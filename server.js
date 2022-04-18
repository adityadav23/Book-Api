require('dotenv').config()
const http = require('http')
const mongoose = require('mongoose')

const connectDb = require('./db/connect')
const app = require('./app')

const PORT = 3000 || process.env.PORT

const server = http.createServer(app);



async function startServer(){

    await connectDb(process.env.MONGO_URI)
    server.listen(3000, ()=>{
         console.log(`Server is listening on ${PORT}...`)
 })
}


mongoose.connection.once('open',()=>{
    console.log('MongoDB connection ready!!')
})

mongoose.connection.on('error',(err)=>{
    console.log(err)
})
startServer()