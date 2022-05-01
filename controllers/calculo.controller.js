const {request, response} = require('express');

const calculoGlobal = (req, res = response)=>{
    res.send("Prueba");
}

module.exports = {
    calculoGlobal
}