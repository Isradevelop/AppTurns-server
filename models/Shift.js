const { Schema, model } = require('mongoose');

const ShiftSchema = Schema({
    
    name:{
        type: String,
        required: true,
        unique: true
    },
    shift:{
        type: String,
        required: true,
        unique: true
    }
});


module.exports = model('Shift', ShiftSchema);