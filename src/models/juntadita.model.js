const { model, Schema } = require("mongoose");

const schema = new Schema({
    miembros: {
        type: [{
            user: Schema.ObjectId,
            role: Schema.ObjectId
        }]
    }
})

const JuntaditaModel = model("Juntadita", schema)

module.exports = JuntaditaModel