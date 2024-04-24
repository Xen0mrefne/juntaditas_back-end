const express = require("express")
const JuntaditaController = require("../controllers/juntaditaController")
const JWT = require("../utils/jwt")


const router = express.Router()

router.get("/juntaditas/:user", JWT.validate, JuntaditaController.getJuntaditasByUser)
router.post("/juntaditas", JWT.validate, JuntaditaController.addJuntadita)

module.exports = router