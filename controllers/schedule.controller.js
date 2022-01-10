
const { DateTime } = require("luxon");
const Employee = require("../models/Employee");

const Schedule = require('../models/Schedule');

//crear nuevo calendario
const createSchedule = async(req, res) =>{

    const { employeeName, dates, shifts, year, month} = req.body;

    //week number
    const weekNumber = DateTime.local(parseInt(year), parseInt(month), parseInt(dates[0])).weekNumber;

    //wek number validation
    const currentWeekNumber = DateTime.local().weekNumber;
    
    if(weekNumber <= currentWeekNumber){
        console.log('Menor');
        return res.status(400).json({
            ok:false,
            msg: 'No se pueden crear calendarios con fecha igual o anterior a la actual'
        })
    }
    
    const employeeBD = await Employee.findOne({name: employeeName});

    //comprobamos que el usuario pasado existe
    if(!employeeBD){
        return res.status(400).json({
            ok: false,
            msg: 'No existe usuario con ese nombre'
        });
    }

    //comprobamos que el usuario no tenga calendario creado para esa semana
    const scheduleByNameList = await Schedule.find({employeeName});
    scheduleByNameList.forEach(schedule =>{

        if(schedule.weekNumber === weekNumber){

            scheduleByNameList = false;
        }
    });

    if(scheduleByNameList){
        return res.status(400).json({
            ok: false,
            msg: 'El usuario ya tiene un calendario con la fecha actual'
        });
    }

    const schedule = await Schedule.create({weekNumber, employeeName, dates, shifts});

    if(schedule){

        return res.json({
            ok: true,
            schedule
        })
    }else{}

}



//GET todos los calendarios
const getSchedules = async(req, res) =>{

    const scheduleList = await Schedule.find();

    if(scheduleList){

        return res.json(
            scheduleList
        );

    }else{

        return res.status(400).json({
            ok: false,
            msg: 'Ha habido algún problema con la BD al consultar todos los calendarios'
        })
    }
    
}


//GET calendario por su semana
const getSchedulesPerWeekNumber = async(req, res)=>{

    const { weekNumber } = req.params;

    const scheduleByWeekList = await Schedule.find({weekNumber});

    if(scheduleByWeekList){

        return res.json({
            ok: true,
            scheduleByWeekList
        });
    }else{

        return res.status(400).json({
            ok: false,
            msg: 'Ha habido algún problema con la BD al consultar los calendarios por semana'
        })        
    }


}

//obtener calendarios de un empleado
const schedulesByName = async(req, res) =>{
    const { name } = req.params;

    const scheduleByNameList = await Schedule.find({employeeName : name});

    if(scheduleByNameList){

        return res.json(
            scheduleByNameList
        );
    }else{

        return res.status(400).json({
            ok: false,
            msg: 'Ha habido algún problema con la BD al consultar los calendarios por nombre de empleado'
        })        
    }
}


//actualizar calendario
const updateSchedule = async(req, res) =>{
    const {weekNumber, employeeName, dates, shifts} = req.body;
    const updatedSchedule = await Schedule.findOneAndUpdate({weekNumber, employeeName}, {shifts, dates});

    return res.json({
        ok: true,
        updatedSchedule
    })
}




module.exports = {
    createSchedule,
    getSchedules,
    updateSchedule,
    getSchedulesPerWeekNumber,
    schedulesByName
    
}