const { request } = require("express");
const bcryptjs = require('bcryptjs'); 

const Employee = require('../models/Employee');
const { generateJWT } = require("../helpers/jwt");





const login = async(req, res) => {

    const { email, password } = req.body;

    try {

        const employeeDB = await Employee.findOne({ email });

        if(!employeeDB){

            return res.status(400).json({
                ok: false,
                msg: 'No existe usuario con esos datos.'
            })
        }

        //comprobar password
        const validPassword = bcryptjs.compareSync(password, employeeDB.password);

        if(!validPassword){

            return res.status(400).json({
                ok: false,
                msg: 'No existe usuario con esos datos.'
            })
        }

        //generar JWT
        const token = await generateJWT(employeeDB.id, employeeDB.name, employeeDB.isABoss);

        //respuesta correcta del servicio
        res.json({
            ok:true,
            uid: employeeDB.id,
            name: employeeDB.name,
            isABoss: employeeDB.isABoss,
            token
        });
        
    } catch (error) {
        return res.status(500).json({
            ok:false,
            msg: 'Problema al hacer login. Hable con el administrador.'
        });
    }
    
}

const renewToken = async(req = request, res) => {

    const { uid, name, isABoss } = req;
    
    const token = await generateJWT(uid, name, isABoss);

    
    return res.json({
        ok:true,
        uid, 
        name,
        isABoss,
        token
    })
}






module.exports = {
    login,
    renewToken
}