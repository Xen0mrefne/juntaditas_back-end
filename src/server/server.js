const express = require("express")
const cors = require("cors")
const authRouter = require("../routers/auth")

const server = express()

server.use(cors({origin: "http://localhost:4200"}))
server.use(express.json())
server.use('/auth', authRouter)

module.exports = server
