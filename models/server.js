const express = require("express");
const cors = require('cors');
require('dotenv').config();

class Server{
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        //Direcciones
        this.calculoRoute = '../routes/calculo.route.js';

        //Middlewares
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());

        //Permitir lectura del body
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/calculo', require('../routes/calculo.route'));
    }

    listen(){
        this.app.listen(this.PORT, ()=>{
            console.log(`Servicios corriendo en el puerto ${this.PORT}`)
        })
    }
}

module.exports = Server;