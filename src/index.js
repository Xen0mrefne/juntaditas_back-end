const server = require("./server/server")
require("dotenv").config()
require("./db/connection")

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log("listening on port " + PORT)
})


