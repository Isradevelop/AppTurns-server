const { Router } = require('express');
const { check } = require('express-validator');

const { createEmployee, getEmployees, deleteEmployee, upgradePassword} = require('../controllers/employee.controller');
const { validate } = require('../middlewares/validate');

const router = Router();


//crear un nuevo usuario
router.post('/new',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'Email no válido').isEmail(),
    check('password', 'La contraseña debe tener más de 6 caracteres').isLength({min:6}),
    check('isABoss', 'Debe indicar el tipo de empleado'),
    validate
], createEmployee);


//consultar todos los empleados
router.get('/', getEmployees);

//eliminar empleado
router.delete('/:name', deleteEmployee);

//actualizar password
router.put('/', upgradePassword)

module.exports = router;

