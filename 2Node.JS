// MODULOS SON ARCHIVOS QUE PODEMOS DIVIDIR EN MULTIPLES PARTES

// vamos a llamar al archivo 3Node.JS y los vamos a guardar en nuestra constante Pagina
// No olvidemos que una constante es unica
 

//llamamos con un require a nuestro archivo .JS 
const pagina = require("./3Node.JS")

/*
Entonces le asignaremos un nombre a la constante donde se requiera el archivo 3NODE.JS 
Se pone ./ para llamarlo  ./3Node.JS
*/

/*Si queremos consultar en NodeJs que funciones estamos llamando de nuestro archivo usamos
nuestro mensajes para que lo imprima en la consola asi mostrando que funciones estamos llamando
*/
console.log(pagina)

//Nombre de la constante punto el nombre de la funcion que queremos llamar y los valores
//console.log(Rey.Multiplicacion(2, 4))