const { Router } = require('express');
const { check } = require('express-validator');

const { getShift, createShift, deleteShift } = require('../controllers/shift.controller');
const { validate } = require('../middlewares/validate');


const router = Router();

// consultar tipos de turnos
router.get('/', getShift);

//creación de turnos
router.post('/',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('shift', 'El horario es obligatorio').not().isEmpty(),
    check('nightHours', 'Las horas nocturnas son obligatorias').not().isEmpty(),
    validate
], createShift);

//eliminación de turnos
router.delete('/:_id', deleteShift);

module.exports = router;