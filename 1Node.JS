

// SE PRUEBA ESTO PARA VER COMO FUNCIONA EN LA CONSOLA CON NODEJS
console.log("Hola Mundo CursoNodeJS")



function papi(){
    console.log(papi)
}

papi("Hola Bebe Hermosa")

function Mago(Ryze){
    console.log(Ryze)
    
}
Mago(9 + 2)
Mago(9 + 2 * 4)
Mago(9 + 2 * 4 / 2)
Mago("Hermosa" + " " + "Te extraño")




let Hermosa = "8";

if(Hermosa > 4){
    console.log("El valor de hermosa es mayor")
}else if(Hermosa < 4){
    console.log("El valor es menor ")
}else{
    console.log("El valor da igual perra")
}

let Lenguajes = "Python"
switch (Lenguajes){
    case "Python":
     console.log("Este lenguaje es python")
    break;
    case "JavaScript":
    console.log("Este lenguaje es JavaScript")
    break;
}

// 3 valores empezando desde 0
let Objetos = ["Santi", "Luis", "Daniel", "Tati", "Cristian"]


for(let Prueba = 3; Prueba < Objetos.length;  Prueba++){
    console.log(Objetos[Prueba])
}


let Rey = 2;

while(Rey > 1){
    console.log(Rey)
    Rey--
}

console.log(
{
     "Username": "Santiago",
    "LastNames": "Ceron Garcia",
    "YearsOld": "20",
    "RH": "O+",
})


let  Joe = 100;

if(Joe > 50){
    console.log("Joe es mayor que el producto que se agrego")
}else if(Joe > 100){
    console.log("Es mucho mas mayor de lo esperado")
}else{
    console.log("El valor es extraño pai")
}


console.log({
    "username":"Cacorro"
})


let TarjetasDv = "Ahorros";

switch(TarjetasDv){
    case "Ahorros":
        console.log("Esta tarjeta es de ahorros")
        break;
    case "Credito":
        console.log("Esta tarjeta es de credito")
        break; 
}
