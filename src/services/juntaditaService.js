const { Types } = require("mongoose");
const JuntaditaModel = require("../models/juntadita.model")


class JuntaditaService {
    static async getJuntaditasByUser(req) {
        const user = req.user;

        return await JuntaditaModel.find({members: {$elemMatch: {user: Types.ObjectId.createFromHexString(user)} }})
    }

    static async addJuntadita(req) {
        const { juntadita } = req.body;
        const user = req.user

        const document = new JuntaditaModel({name: juntadita.name, members: [{user, role: "owner"}]})

        await document.save();
    }
}

module.exports = JuntaditaService;