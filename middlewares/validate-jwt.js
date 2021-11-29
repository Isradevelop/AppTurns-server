const { response, request } = require("express")
const jwt = require('jsonwebtoken');


const validateJWT = (req = request, res = response, next) => {

    const token = req.header('x-token');

    //comprobamos si viene un jwt en el encabezado
    if(!token){
        return res.status(401).json({
            ok: false,
            msg:'Error en el token'
        });
    }

    try {
        
        const {uid, name, isABoss} = jwt.verify(token, process.env.SECRET_JWT_SEED);//devuelve un objeto con el payload
        
        req.uid = uid;
        req.name = name;
        req.isABoss = isABoss;
        
    } catch (error) {
        
        return res.status(401).json({
            ok: false,
            msg: 'Error en el token validate'
        })
    }

    next();
}


module.exports = {
    validateJWT
}