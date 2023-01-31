//? Funciones: parametros y argumentos

function sumar(num1, num2){ // num1 y num2 son parametros de entrada
    console.log(num1 + num2);
};

sumar(2, 2);
sumar(3, 3);
sumar(10, 5);


//* Parametros por default
function sumar2(num1=0, num2=0){
    console.log(num1 + num2);
};

sumar2(2);
