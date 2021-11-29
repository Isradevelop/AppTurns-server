const  mongoose = require("mongoose");


const dbConection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            
        });

        console.log('BD online');

    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar con la BD')
    }
}


module.exports = {
    dbConection
}