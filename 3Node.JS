
// creamos un objeto

// AQUI ESTAMOS LLAMANDO UN OBJETO CON SUS PROPIEDADES TAMBIEN PODRIAMOS LLAMAR FUNCIONES
const Rey = {};


function Suma(s2, s1){
    return s2 + s1;
}

function Resta(s2, s1){
    return s2 - s1;
}

function Multiplicacion(s2, s1){
    return s2 * s1;
}

//asignamos dos valores
function Division(s2, s1){
    //Si el valor s1 es igual a 0 (Hacemos comparacion)
    if(s1 == 0){
        console.log("No se puede dividir por cero")
        // De lo contrario seguir con la division
    }else if(s2 == 0){
        console.log("No se puede dividir por cero")
    }else{
        return s2 / s1;
    }
}

// Aqui podremos reemplazar el exports por el nombre de nuestra constante para que maneje estas propiedades
// es decir le estamos agregando estas propiedades a nuestro objeto

//Esto nos exporta una propiedad de un objeto
Rey.Suma = Suma;
exports.Resta = Resta;
exports.Division = Division;
exports.Multiplicacion = Multiplicacion;

/*function  Hello(Hola){
    console.log(Hola)
}
*/

//Mientras que module.exports = Hello nos exporta funciones, Objetos
module.exports = Rey;