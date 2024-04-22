const UserModel = require("../models/user.model");

class UserValidator {
    static fields = async (req, res, next) => {
        const { user } = req.body;

        const errors = []
        if (!user["email"]) errors.push("Email is required")
        if (!user["username"]) errors.push("Username is required.")
        if (!user["password"]) errors.push("Password is required.")
        
        if (errors.length > 0) {
            res.status(400).json({errors})
            return;
        }
        next()
    }

    static alreadyExists = async (req, res, next) => {
        const { user } = req.body;
        const errors = []
        let document;

        document = await UserModel.findOne({username: user.email})
        if (document !== null) errors.push("Username is already used.")
        
        document = await UserModel.findOne({email: user.email})
        if (document !== null) errors.push("Email is already used.")

        if (errors.length > 0) {
            res.status(400).json({errors})
            return;
        }
        next()
    }
}

module.exports = UserValidator