//? Estructura de control switch
//* Este codigo puede usarse para multiples condiciones, pero despues de mas de tres 
//* se ve demasiado cargado  y es mas dificl de mantener. 

// const rol = 'EDITOR';

// if (rol === 'ADMIN') {
//     console.log("Acceso total de sistema");
// } else if (rol == 'EDITOR') {
//     console.log("acceso de editor")
// } else {
//     console.log("Acceso limitado")
// }

//* Una mejor alternativa para multiples condiciones es la estructura switch:

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'tarjeta':
        console.log("Pagaste con tarjeta");
        break;
    case 'efectivo':
        console.log("Pagaste con efectivo");
        break;
    case 'transferencia':
        console.log("Pagaste mediate transferencia");
        break;
    default:
        console.log("Metodo de pago invalido")
        break;

}
