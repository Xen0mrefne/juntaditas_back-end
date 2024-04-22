const express = require("express");
const CalendarController = require("../controllers/calendarController");

const router = express.Router();

router.get('/reminders/:id', CalendarController.getReminderById)
router.post('/reminders', CalendarController.addReminder)

module.exports = router