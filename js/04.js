// Strings o cadenas

const producto = "Monitor HD";
const producto2 = String('Monitor HD');
const producto3 = new String('Monitor HD');
const producto4 = 'Monitor HD';
const producto5 = "\"Monitor HD \"";
const producto6 = '"Monitor HD"';

const mensaje = 'Curso basico de javascript';

// Algunos métodos para strings
console.log(producto);
console.log(producto.length); // retorna el numero de elementos del string
console.log(mensaje);
console.log(mensaje.length);
console.log(mensaje.indexOf('javascript')) // retorna el indice donde inicia una concordancia en el string
console.log(mensaje.indexOf('pyhthon')) // Si no existe retorna un numero negativo
// Includes (retorna true o false)
console.log(mensaje.includes('javascript'))
console.log(mensaje.includes('python'))