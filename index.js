require('dotenv').config()

const express = require('express')

const server = express()

server.use(express.json())

if (process.env.NODE_ENV === 'development') {
    const cors = require('cors')
    server.use(cors())
}