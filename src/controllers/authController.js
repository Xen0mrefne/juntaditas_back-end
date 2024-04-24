const AuthService = require("../services/authService")


class AuthController {
    static register = async (req, res) => {
        try {
            await AuthService.register(req);
            res.status(200).json({message: "User registered successfully."})
        } catch (err) {
            console.log(err)
            res.status(400).json({message: "An error has ocurred"})
        }
    }

    static login = async (req, res) => {
        try {
            const {token, username} = await AuthService.login(req)
            res.status(200).json({message: "Welcome, " + username, token})
        } catch (err) {
            res.status(400).json({message: err.message})
        }
    }
}

module.exports = AuthController