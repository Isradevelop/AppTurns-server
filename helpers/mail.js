const nodemailer = require('nodemailer');
const { getEmployees } = require('../controllers/employee.controller');
const Employee = require('../models/Employee');

//esta función permite enviar un email al empleado especificado. Type indica el tipo de correo a enviar
const sendMail = async(affectedEmp, applicantEmp,type) =>{

    //estas variables almacenan el asunto y cuerpo del email
    let subject;
    let html;
    
    const employees = await Employee.find();
    
    let employeesEmail = '';

    //seleccionamos los email de los empleados afectados por el cambio
    for(let employee of employees){

        if(employee.name == affectedEmp || employee.name == applicantEmp) employeesEmail += employee.email + ',';
        
    }

    switch (type) {
        //nuevo turno
        case "pending":
            subject = 'Solicitud de cambio de turno';
            html = '<h2>Hay un nuevo cambio pendiente</h2><p>Ve a AppTurns para gestionarlo.</p>';
            break;

        //aceptado por compañero
        case 'accepted':
            subject = 'Cambio de turno completado'
            html = '<h2>Cambio de turno completado. Por favor va a AppTurns para revisar el nuevo horario.</h2>';

        //aceptado por boss    
        case 'approved':
            subject = 'Cambio de turno aceptado por compañero';
            html = '<h2>Tu compañero ha aprobado el cambio de turno.</h2>';
            break;

            //rechazado por boss o compañero
        case "rejected":
            subject = 'Cambio de turno rechazado';
            html = '<h2>Se ha rechazado el cambio de turno.</h2>';
            break;

        
        default:
            break;
    }

    /////   NODEMAILER   ////
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'isradevelop@gmail.com',
            pass: 'yyulkbdzkwnerdpt'
        }
    });

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
        console.log(error);
        } else {
        console.log("Server is ready to take our messages");
        }
    });

    const mailOptions = {
        from: 'isradevelop@gmail.com',
        to: employeesEmail,
        subject: subject,
        html: html
      };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('email send');
        }
    });
/////    FIN NODEMAILER   /////
}

module.exports = {
    sendMail
}