const UserModel = require("../models/user.model")
const bcrypt = require("bcrypt")

class AuthService {

    static register = async (req) => {
        const { user } = req.body
        const encryptedPassword = await bcrypt.hash(user.password, 10)

        const newUser = {
            ...user,
            password: encryptedPassword
        }

        const document = new UserModel(newUser)
        await document.save()
    }

    static login = async (req) => {
        const { user } = req.body;

        let document = await UserModel.findOne({email: user.email})

        if (document === null) throw new Error("Username or password incorrect.");

        const passwordMatch = await bcrypt.compare(user.password, document.password);

        if (!passwordMatch) throw new Error("Username or password incorrect.")

        return document;
    }

}

module.exports = AuthService