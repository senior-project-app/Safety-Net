const Schema = require("mongoose").Schema;

supervisedSchema = new Schema({
    name: String,
    schedule: {
        activeHours: [{
                start: Number,
                end: Number
            }],
        quietHours: [{
                start: Number,
                end: Number
            }],
    }
})

module.exports = supervisedSchema;