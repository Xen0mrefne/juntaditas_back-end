const CalendarService = require("../services/calendarService")

class CalendarController {
    static addReminder = async (req, res) => {
        try {
            const reminder = await CalendarService.addReminder(req);
            res.status(200).json({reminder})
        } catch (err) {
            console.log(err)
            res.status(400).json({message: "Couldn't add reminders"})
        }
    }
    
    static getReminderById = async (req, res) => {
        try {
            const reminder = CalendarService.getReminderById(req)
            res.json({reminder})        
        } catch (err) {
            console.log(err)
        }
    }

    static getRemindersByUser = async (req, res) => {
        try {
            const reminders = CalendarService.getRemindersByUser(req)
            res.status(200).json({reminders})
        } catch (err) {
            console.log(err)
            res.status(400).json({message: "Couldn't get reminders"})
        }
    }
}


module.exports = CalendarController