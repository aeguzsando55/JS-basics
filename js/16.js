//* Funciones

//* Formas de declaración de la función
// Declarativa (comun entre otros lengajes de programación)
function sumar(){
    console.log(10+10);
};
// Llamada
sumar();

// Expresión de la función
const sumar2 = function(){
    console.log(3+3);
};
// llamada
sumar2();

//! JS se executa en dos etapas: una de registro y otra de ejecución. A esto se le conoce como hoistng
//! A pesar de que las anteriores funciones tienen la misma funcinalidad, su mayor diferencia (ademas de
//! la sintaxis) esta e que en la prmera funcion, esta puede ser declarada y llamada en cuaqluier parte 
//! del codigo, pues la tarea de la etapade registro es guardar todas las funcones implicadas. A
//! continuacion un ejemplo:
multplicar(); // Se llama primero a la función
function multplicar(){ //? se declara despues la función
    console.log(2*2);  // Funciona porque al ejecutar el codgo primero se registrara la función
}

//! Caso contrario, con una expresión de función esto retornara un error puesto que se esta declarando y 
//! registrando como una variable:
// const multplicar2 = function(){
//     console.log(4*4);
// }

//! IIFE: funciones que se declaran y se invocan a ellas mismas sin necesidad de ser llamadas
//! Son utiles para proteger que no se mezclen varables y funciones de otros archivos.
(function() {
    console.log('Esto es una función');
})();