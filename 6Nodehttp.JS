// segunda opcion
// creamos la constante donde guardaremos nuestro modulo
const server = require ("http")

// creamos otra consante donde guardaremos lo que va a tener nuestro servidor una peticion una respuesta y el texto
const ServerFuncion = function(req, res){
    //podemos agregar muchas mas cosas a nuestra respuesta
   res.writeHead(200, ("content-type", "text/html"));
   res.write("<h1>Hola Mundo</h1>");
   res.end();
}

// en otra constante guardaremos nuestro callback 
const servicio = server.createServer(ServerFuncion);
  
// aqui llamaremos la constante que esta llamando la otra constante asignandole un puerto y un mensaje cuando se cree la funcion
servicio.listen(1000, function(){
    console.log("server en puerto 1000")
})

