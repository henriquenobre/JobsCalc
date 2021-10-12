const express = require("express")
const server = express()
const routes = require("./routes")


server.set('view engine', 'ejs')

//habilitar arquivos estaticos
server.use(express.static("public"))

//habilitar req.body
server.use(express.urlencoded({ extended: true }))

server.use(routes)

server.listen(3000, () => console.log("working"))