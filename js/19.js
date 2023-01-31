//? Funciones con return

const sumar = function(num1, num2){
    return num1 + num2;
};

console.log(sumar(2, 2)); // La funcion realiza la operacion dentro de un print
let resultado; 
resultado = sumar(2,3); // La operacion se asigna como valor de una variable y realiza la operacion.
console.log(resultado);

let total = 0;
function agregarCarrito(precio){
    return total+= precio;
}

function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(200);
total = agregarCarrito(1200);
total = agregarCarrito(100);
total = agregarCarrito(2000);
console.log(total);
const totalPagar= calcularImpuesto(total);
console.log(`El total a pagar es de: $${totalPagar}`);