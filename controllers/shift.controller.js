const { request, response } = require("express");


const Shift = require('../models/Shift');


//consulta horarios disponibles
const getShift = async(req, res) => {

    const shifts = await Shift.find();
    return res.json(
        shifts
    )
}

//crear horario
const createShift = async(req, res) =>{

    try {
        
        const shiftsAvailables = await Shift.find();
        
        const {name} = req.body;
        
        //comprobamos si existe el turno a crear
        const found = shiftsAvailables.find( shift => shift.name === name);
        
        if(found){
            
            return res.status(400).json({
                ok: false,
                msg:'Ya existe un turno con ese nombre'
            });
        }

        const newShift = new Shift(req.body); 

        //grabamos el nuevo turno en la BD
        await newShift.save();

        return res.json({
            newShift
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un error al acceder a la BD. Hable con el administrador.'
        })
    }
    

}


const deleteShift = async(req, res) =>{

    try {

        const {_id} = req.params;
        console.log(_id);

        const shiftDelete = await Shift.findByIdAndRemove(_id);

        if(shiftDelete){

            return res.json({
                ok: true,
                shiftDelete
            });
        }else{

            return res.status(400).json({
                ok: false,
                msg: 'No se puede eliminar el turno'
            })
        }
        
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un error al acceder a la BD. Hable con el administrador.'
        })
    }
    

}



module.exports = {
    getShift,
    createShift,
    deleteShift
}