require('dotenv')
const express = require('express')
const server = express()
const PORT = process.env.PORT || 5000
server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`)
})