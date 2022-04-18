const http = require('http')

const app = require('./app')
const PORT = 3000 || process.env.PORT

const server = http.createServer(app);



async function startServer(){

 server.listen(3000, ()=>{
     console.log(`Server is listening on ${PORT}...`)
 })
}

startServer()