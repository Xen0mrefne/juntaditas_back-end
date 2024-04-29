const { model, Schema } = require("mongoose");

const schema = new Schema({
    name: {
        type: String,
        required: true,
        default: "Juntadita " + Date.now()
    },
    members: {
        type: [{
            user: Schema.ObjectId,
            role: String
        }],
        required: true,
        default: []
    },

})

const JuntaditaModel = model("Juntadita", schema)

module.exports = JuntaditaModel