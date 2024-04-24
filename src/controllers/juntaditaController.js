const JuntaditaService = require("../services/juntaditaService");


class JuntaditaController {
    static async getJuntaditasByUser(req, res) {
        try {
            const juntaditas = await JuntaditaService.getJuntaditasByUser(req);
            res.status(200).json({juntaditas})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Ha ocurrido un error al obtener tus juntaditas"});
        }
    }

    static async addJuntadita(req, res) {
        try {
            await JuntaditaService.addJuntadita(req)
            res.status(200).json({message: "Juntadita creada."})
        } catch (error) {
            console.log(error)
            res.status(400).json({message: "Ha ocurrido un error al crear la juntadita."});
        }
    }
}

module.exports = JuntaditaController