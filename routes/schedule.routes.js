const { Router } = require('express');
const { check } = require('express-validator');

const { createSchedule, getSchedules, updateSchedule, getSchedulesPerWeekNumber } = require('../controllers/schedule.controller');
const { validate } = require('../middlewares/validate');

const router = Router();


//crear un nuevo calendario
router.post('/new',[
    check('employeeName', 'El nombre es obligatorio').not().isEmpty(),
    check('shifts', 'Los días son obligatorios').not().isEmpty(),
    validate
], createSchedule);

//consulta todos los calendarios
router.get('/', getSchedules);

//consulta los calendarios por número de semana
router.get('/:weekNumber', getSchedulesPerWeekNumber);

//modifica un calendario
router.put('/', updateSchedule);


module.exports= router;