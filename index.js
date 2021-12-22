
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const{dbConection} = require('./db/config')

//crear servidor de express
const app = express();

//BD
dbConection();

//directorio público
app.use( express.static('public') );

//CORS
app.use( cors() );

//Lectura y parseo del body
app.use(express.json());

//rutas
app.use( '/api/auth', require('./routes/auth.routes') );
app.use( '/api/shift', require('./routes/shift.routes'));
app.use('/api/employee', require('./routes/employee.routes'));
app.use('/api/schedule', require('./routes/schedule.routes'));
app.use('/api/change', require('./routes/change.routes'));

//manejar demas rutas(produccion)
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});