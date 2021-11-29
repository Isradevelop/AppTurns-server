const { request, response } = require("express");
const bcryptjs = require('bcryptjs'); 

const Employee = require('../models/Employee');
const { generateJWT } = require("../helpers/jwt");


//crear empleados
const createEmployee = async(req = request, res = response) => {

    const {name, email, password, id, isABoss} = req.body;

    try {

        //verificar email
        const employee = await Employee.findOne({email});

        if(employee){
            return res.status(400).json({
                ok: false,
                msg:'Ya existe el usuario con ese email'
            })
        }

        //crear usuario con el modelo
        const dbEmployee = new Employee(req.body); 

        //hashear contraseña
        const salt = bcryptjs.genSaltSync();
        dbEmployee.password = bcryptjs.hashSync(password, salt);

        //generar JWT
        const token = await generateJWT(id, name);

        //crear usuario en BD
        await dbEmployee.save();

        //generar respuesta
        return res.status(201).json({
            ok: true,
            uid: dbEmployee.id,
            name,
            email,
            isABoss,
            token
        });
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg:'Problema al crear usuario. Hable con el administrador.'
        })
    }
}


const getEmployees = async(req, res = response) => {

    const employees = await Employee.find();
    for( let employee of employees){
        
        employee._id = employee._id.toString();
    }
    
    return res.json(
        employees
    )
}



const deleteEmployee = async( req, res) =>{
    const {name} = req.params;
    const deleted = await Employee.findOneAndDelete({name});

    return res.json(
        deleted
    )
}


const upgradePassword = async(req, res) =>{

    const {name, password} = req.body;

    //hashear contraseña
    const salt = bcryptjs.genSaltSync();
    const hashPassword = bcryptjs.hashSync(password, salt);

    await Employee.findOneAndUpdate({name}, {password: hashPassword});

    return res.json({
        ok:true
    })
}


module.exports={
    createEmployee,
    getEmployees,
    deleteEmployee,
    upgradePassword
}