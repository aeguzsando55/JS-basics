//* Diferencia entre método y función
// Declaremos dos variables de la siguiente forma:
const num1 = 20;
const num2 = '20';
// Por ejemplo, observa en como para transformar el string num2, utlizamos claramente una función:
console.log(parseInt(num2)); // Esto es una función
// Usualmente un metodo es una funcion propia de un objeto:
console.log(num1.toString()); // Observa que num1 es ya un objeto, del cual se llama el metodo toString