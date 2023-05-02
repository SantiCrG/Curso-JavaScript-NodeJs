

// DE ESTA MANERA PODEMOS CREAR UN SERVIDOR MUCHO MAS FACIL QUE ANTES
// YA QUE LLAMAMOS CON EL MODELO DE EXPRESS Y LE DAMOS UN PUERTO CON LA CONSTANTE

const express = require("express");
const colors = require("colors");

//abriremos la constante server donde guardaremos el modelo express
const server = express();

//cuando ami servidor le pidan la ruta inicial entonces le va a responder con una funcion la cual sera el h1
// usaremos server con un get para realizar la peticion y respuesta de el servidor 
server.get("/", function(req,res){
    res.send("<h1>Hola Bienvenido a este localhost con Nodejs y express<h1>")
    res.end();
})

// aqui mostraremos el mensaje en consola de que ya se abrio el puerto 3000 , listen es la conexion a ese puerto
server.listen(3000, function(){
    console.log("Server en puerto 3000".green);
});