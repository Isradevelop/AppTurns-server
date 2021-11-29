const {Router} = require('express');

const {createChange, getChanges, updateStatusChange} = require('../controllers/change.controller');


const routes = Router();

//crear cambio
routes.post('/', createChange);

//consulta todos los cambios con el status indicado
routes.get('/:status', getChanges);

//modifica el status de un cambio
routes.put('/', updateStatusChange);




module.exports = routes