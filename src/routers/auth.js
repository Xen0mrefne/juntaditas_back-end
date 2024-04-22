const express = require("express")
const AuthController = require("../controllers/authController")
const UserValidator = require("../utils/validators")

const router = express.Router()

router.post("/register",
[UserValidator.fields, UserValidator.alreadyExists],
AuthController.register)

router.post("/login", AuthController.login)

module.exports = router