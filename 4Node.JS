                // MODULOS DE LA DOCUMENTACION NODEJS

// Vamos a requerir este modulo que se llama os
// - Este nos ayuda a tener informacion de nuestro sistema operativo
// - Al no ponerle un ./ le estamos diciendo que no esta en este lugar si no en el sistema al instalar NodeJS

const aguacate = require("os")

// para saber desde que plataforma lo estamos llamando
console.log(aguacate.platform());

//Version de windows
console.log(aguacate.version());

// Añadiendo concatenaciones , (Console.log concatena atravez de comas)
console.log("Version De Windows:", aguacate.version());

console.log("Nombre del equipo: ", aguacate.hostname());

console.log(aguacate.uptime());

console.log("El usuario:", aguacate.homedir());



                    // MODULO FILE SYSTEM DE NODEJS
// NOS PERMITE TRABAJAR CON ARCHIVOS DEL SISTEMA OPERATIVO
const fs = require("fs");

// 1 desde fs vamos a crear un nuevo archivo
// 2) recibe unos parametro el cual le asignaremos un nombre
// 3) y queremos que lo cree en este mismo proyecto por lo que le pondremos ./
// 4) Despues de eso le asignaremos un contenido dentro del archivo en este caso un texto linea uno
// 5) Crearemos tambien un callback es una funcion que se ejecuta cuando ha terminado el proceso anterior es decir cuando termina de crear el archivo

//METODO ASINCRONO                         //FUNCION QUE NOS DIRA EL RESULTADO DE LA CREACION (CALLABACK)
 fs.writeFile("./Archivo.txt", "Linea uno",function(error){
    // SI HAY UN ERROR ENTONCES
    if(error){
        console.log("Hubo un error")
    }
    // DE LO CONTRARIO
    console.log("Se ha creado  perfectamente")
 } );

console.log("Mensajes mientras se crea el archivo de el sistema operativo")



// Consulta a base de datos
/*
const users = query("select * from tabla_users" )
//

query("select * from users", function(errordb){
if(errordb){
    console.log("Hubo en error para consultar")
}
console.log("Se hizo la consulta correctamente")
})
*/


// COMO LEER UN ARCHIVO QUE QUERAMOS

fs.readFile("./Archivo.txt", function(error, datos){
    if(error){
        console.log(Error)
    }
    // en este caso nos muestra un dato crudo
    //console.log(datos)
    // en este caso nos mostrara un dato con string
    console.log(datos.toString())
})