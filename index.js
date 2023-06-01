const express = require('express')
const cors = require('cors')
const dt = require('dotenv').config()
const app = express()
const router = require('./router')
const path = require('path')
const fileUpload = require('express-fileupload')
const port = process.env.PORT || 2917
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(
    {
        origin: ['https://admin-server-topaz.vercel.app/', 'http://localhost:2917/', 'https://admin-25de.onrender.com/']
    }
))
app.use('/', express.static(path.join(__dirname, 'public/')))
app.use(fileUpload())
app.use(router)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
