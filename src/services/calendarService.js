const ReminderModel = require("../models/reminder.model");


class CalendarService {
    static addReminder = async (req) => {
        const { reminder } = req.body;
        const document = new ReminderModel(reminder)
        await document.save()
        return document;
    }

    static getReminderById = (req) => {
        return {
            id: req.params.id,
            date: "06/05/2024",
            description: "birthday"
        };
    }

    static getRemindersByUser = async (req) => {
        const { userId } = req.params
        const documents = await ReminderModel.find({user: userId})
        
        if (documents.length === 0) {
            throw new Error("Reminders not found");
        }

        return documents;
    }
}

module.exports = CalendarService