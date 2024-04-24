const jwt = require("jsonwebtoken")
require("dotenv").config()

class JWT {
    static generate(payload) {
        return jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: "1h"})
    }

    static async validate(req, res, next) {
        try {
            const token = req.header("Authorization")
            if (!token) throw new Error("Token not found.")
            const { user } = jwt.verify(token, process.env.SECRET_KEY)
            if (!user) throw new Error("Invalid token")
            req.user = user;
            next();
        } catch (err) {
            console.log(err)
            res.status(401).json({message: err.message})
        }
    }
}

module.exports = JWT;