//? Estructuras de control

let puntaje = "1000";
// Tenemos dos estructuras de control que srven para el mismo proposito
if(puntaje == 1000) { // La estructura de cotrol == verfca que el valor sea agual sin restrciones de datos
    console.log("Si, el puntaje es 1000");
}

if(puntaje === 1000) { // La estructura de cotrol triple es mas estricta, por lo que la condicion no se cumple.
    console.log("Si, el puntaje es 1000");
} else {
    console.log("No cumplio la condición"); // Como no se cumple la condicion, se ejecuta este código
}
// Aqui si se cumplira y ejecutara el codigo:
puntaje = 500;

if(puntaje === 500) {
    console.log("Si, el puntaje es 500");
} else {
    console.log("no es igual");
}

// Otra opcion es verificar cuando no es igual
puntaje = 100;
if (puntaje !== 1000) {
    console.log("Si es diferente");
}

// Podemos verificar tambien con una condicon de mayor o menor a:
let efectivo = 1000,
    carrito = 8000;

if (efectivo >= carrito) {
    console.log("El pago puede realizarse");
} else {
    console.log("Fondos insufucientes")
}
// Tambien se pueden tener multiples condiciones, para ello se usa la estructrua else if
const rol = 'EDITOR';

if (rol === 'ADMIN') {
    console.log("Acceso total de sistema");
} else if (rol == 'EDITOR') {
    console.log("acceso de editor")
} else {
    console.log("Acceso limitado")
}

// El anterior codigo puede usarse para multiples condiones, pero despues de mas de tres 
// se ve demasiado cargado el codigo. Una mejor alternativa para multiples condiciones
// es la estructura switch:


