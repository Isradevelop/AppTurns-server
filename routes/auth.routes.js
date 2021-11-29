const { Router } = require('express');
const { check } = require('express-validator');

const { login, renewToken } = require('../controllers/auth.controller');
const { validate } = require('../middlewares/validate');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();



//login 
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es incorrecta').isLength({min:6}),
    validate
], login)

//validar y revalidar token
router.get('/renew',validateJWT, renewToken);



module.exports = router;