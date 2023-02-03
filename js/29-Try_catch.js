//? Excepciones Try catch
//* La excepciones permiten ejecutar partes del codigo que puedenllegar a fallar sin que este
//* sin que le programa de cierre completamente.
// Delcaremos dos variables:
const num1 = 1;
const num3 = 3;

console.log(num1);
// En este bloque try catch ntentaremos imprmir una varable que no fue declarada previamente
try {
    console.log(num2); // Si existe, la variable la imprime.
} catch (error) {
    console.log(error); // Si no, omprime el error, pero el programa continua.
}

console.log(num3);

//* El uso de un bloque de excepcion se recomenda en partes de codigo que son críticas en cuanto
//* a la ejecución. Por ejemplo la conexion a una base de datos, la valdacon de una transaccion o
//* el logueo de un usuario.