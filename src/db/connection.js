const mongoose = require("mongoose");

const DATABASE = process.env.DATABASE_URL || '';

(async () => {
    try {
        await mongoose.connect(DATABASE)
        console.log('Connected to database!')
    } catch (err) {
        console.error(err)
    }
})()