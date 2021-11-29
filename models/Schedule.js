const { Schema, model } = require("mongoose");


const ScheduleSchema = Schema({
    weekNumber:{
        type: Number,
        required: true
    },
    employeeName:{
        type: String,
        required: true,
    },
    dates:{
        type: [String],
        required: true
    },
    shifts:{
        type: [String],
        required: true
    }
        
    
});

module.exports = model('Schedule', ScheduleSchema)