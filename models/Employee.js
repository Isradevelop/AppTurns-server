const { Schema, model } = require("mongoose");


const EmployeeSchema = Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    isABoss:{
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = model('Employee', EmployeeSchema)