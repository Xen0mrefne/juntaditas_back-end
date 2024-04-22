const { model, Schema } = require("mongoose")

const schema = new Schema({
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    user: {
        type: Number,
        required: false
    }
})

const ReminderModel = model("Reminder", schema)

module.exports = ReminderModel  