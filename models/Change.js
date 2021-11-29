const { Schema, model } = require('mongoose');

const ChangeSchema = Schema({

    applicantEmployee:{
        type: String,
        required: true,
        
    },
    affectedEmployee:{
        type: String,
        required: true,
        
    },
    shiftApplicant:{
        type: {},
        required: true
    },
    shiftAffected:{
        type: {},
        required: true
    },
    changeDate:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    }
});


module.exports = model('Change', ChangeSchema);