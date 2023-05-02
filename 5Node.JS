// MODULO DE SERVIDORES EN NODEJS

                    // MODULO HTTP

                    // Guardamos nuestro modulo en una constante
const server = require ("http")

// nuestra constante la vamos a crear con CreatesServer // le damos una funcion que tengo una peticion y una respuesta
// en la respuesta le vamos a decir que va a tener un h1 con un texto
// luego le damos un fin a esa respuesta

server.createServer(function(req, res){
     //podemos agregar muchas mas cosas a nuestra respuesta
    res.writeHead(200, ("content-type", "text/html"));
    res.write("<h1>Hola Mundo</h1>");
    res.end();
    // le damos un puerto de nuestro equipo en este caso 3000 // lo buscariamos en la web con localhost:3000
}).listen(3000);



