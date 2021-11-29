const { request, response } = require("express");
const {  sendMail } = require('../helpers/mail');

const Change = require('../models/Change');
const Schedule = require('../models/Schedule');
const Employee = require("../models/Employee");

//creación de cambios de turno. Se envía un email a la persona afectada por el cambio
const createChange = async(req, res) =>{

    const newChange = new Change(req.body);
   
    const change = await newChange.save();

    if(change){
        await sendMail(change.applicantEmployee, change.affectedEmployee, change.status);
        return res.json(change);
    }

    
}

// consulta todos los cambios pendientes, aceptados, rechazados o finalizados
const getChanges = async(req, res) =>{

    const { status } = req.params;

    const changes = await Change.find({status});

    return res.json(
        changes
    );
}

//este método se utilizará para cambiar el status de los cambios y modificar los turnos
const updateStatusChange = async(req, res) =>{

    //_id es el id del cambio a modificar
    const { _id, status, applicantSchedule, affectedSchedule, i } = req.body;
    
    const change = await Change.findOneAndUpdate({_id}, {status});
    
    if(change){
        await sendMail(change.applicantEmployee, change.affectedEmployee, status);
        //console.log(status);
        try {

            //solo será aprovado cuando el endpoint sea llamado desde shift-change component de Angular
            if (status == 'approved'){
                //realizamos los cambios de turno en la BD
                const affectedShiftToChange = affectedSchedule.shifts[i];
                const applicantShiftToChange = applicantSchedule.shifts[i];
                    
                    
                affectedSchedule.shifts[i] = applicantShiftToChange;
                applicantSchedule.shifts[i] = affectedShiftToChange;
                    
                //id del calendario a modificar, dentro del cambio
                let _id = applicantSchedule._id;
                await Schedule.findOneAndUpdate( {_id}, {shifts: applicantSchedule.shifts});
                    

                _id = affectedSchedule._id;
                await Schedule.findOneAndUpdate( {_id}, {shifts: affectedSchedule.shifts});
                    
                return res.json({
                    ok: true
                })
                    
                    
            }

        } catch (error) {
            return res.status(400).json(
                {
                    ok: false,
                    error
                }
            )
        }
            
        return res.json(change);
            
    }
    
}

module.exports = {
    createChange,
    getChanges,
    updateStatusChange
}