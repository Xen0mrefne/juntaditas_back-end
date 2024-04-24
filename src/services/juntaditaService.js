const { mongo } = require("mongoose");
const JuntaditaModel = require("../models/juntadita.model")


class JuntaditaService {
    static async getJuntaditasByUser(req) {
        const { user } = req.params;

        return await JuntaditaModel.find({miembros: {$elemMatch: {_id: user} }})
    }

    static async addJuntadita(req) {
        const { user } = req.body;

        const document = new JuntaditaModel({miembros: [{user: user._id, role: "owner"}]})

        await document.save();
    }
}

module.exports = JuntaditaService;