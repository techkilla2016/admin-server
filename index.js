const express = require('express')
const cors = require('cors')
const http = require('http')
const { Server } = require('socket.io')
const dt = require('dotenv').config()
const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:3000', 'https://tkadmin-ui.onrender.com/', 'https://blissful-shadow-99347.pktriot.net']
    }
})
const router = require('./router')
const path = require('path')
const fileUpload = require('express-fileupload')
const port = process.env.PORT || 2917
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(
    { origin: ['http://localhost:3000', 'https://tkadmin-ui.onrender.com/', 'https://blissful-shadow-99347.pktriot.net'] }
))
app.use(fileUpload())
app.use('/', express.static(path.join(__dirname, 'public/')))
app.use(router)
server.listen(port, () => {
    console.log(`http://localhost:${port}`)
})