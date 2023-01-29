//** Arrays */ 

const numeros = [2,4,8,16,32,64];
// console.log(numeros);
// console.table(numeros);

//* Otra manera de declararlos es con un constructor de la clase Array:
const meses = new Array('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun');
// console.table(meses);

//* Se pueden mezclar toda clase de datos en el array:
const arreglo = ['Hola', 1, true , null, {nombre:'Juan', edad:19}, [1,2,3]];
// console.log(arreglo);
// console.table(arreglo);

//* Para acceder a los elementos del arreglo:
// console.log(numeros[numeros.length-1]);
// console.log(numeros[0]);

//* Conocer la longitud de un arreglo
// console.log(meses.length);

//* recorrido de arreglos:
// meses.forEach( function(mes) { // Bascamente un ciclo for que devuelve cada elemento
//     console.log(mes); // mes es el iterador de recorrido
// })

// numeros.forEach( function(num){
//     console.log(num);
// })

//* Modificaciones en arreglos
//* Como en otros lenguajes, se puede agregar un nuevo elemento de la sguente forma:
numeros[numeros.length] = 128; // Es un poco complicado al requerirse  la longitud del arreglo
numeros[numeros.length] = 264;
console.log(numeros);
//* Asi mismo, podemos modificar un elemento de la siguente forma:
numeros[1] = "4(m)";
console.log(numeros);
//* si bien esto es más que valido, en js se suelen utlizar otros metodos:
numeros.push(512); // Para agregar se usa el metodo push
console.log(numeros);
numeros.push(1024, 2048, 4096); // Este permite incluso agregar multples elementos
console.log(numeros);

//* Otra forma se conoce como unshift, el cual agrega elementos al principio.
numeros.unshift(8192, 16384);
console.log(numeros);

//* Para eliminar elementos:
console.log(meses);
meses.pop(); // elimina el ultimo elemento
console.log(meses);

meses.shift(); // elimina el primer elemento
console.log(meses);
// Elimna los elementos a partir de un ndice especifico, hacia n posicones
meses.splice(1,1) // Es este caso elmina solo un elemento.
console.log(meses);

//! Modifcar los arreglos originales no es una práctica  común en js, por ello se optan otros 
//! enfoques, tales como el Rest operator o Spread operator:
// const nuevoArreglo = [...meses, 'Jun']; // Esta es una practica mejor vista si se busca modificar arreglos
// console.log(nuevoArreglo);
const nuevoArreglo = ['Ene',...meses]; 
console.log(nuevoArreglo);