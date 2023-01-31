//? Arrow functions

// Teenmos una expresion de una funcion para sumar.
const sumar = function(n1, n2){
    console.log(n1 + n2);
}
sumar(2, 3);

// Para transformarla en una arrow function se utiliza la siguente sixtaxis
const sumar2 = (n1, n2) => console.log(n1 + n2); 
sumar2(2,3);

// Si los parametros de entrada son solo uno los parentesis son opcionales
const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
aprendiendo("javascript");

// Al igual que en la practica anterior es posible crear metodos de propiedad con arrow fuctions
const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo playlist ${nombre}`)
}

// En donde son mas utiles las arrow functon es el arreglos
const meses = new Array('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun');
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Monitor 49 pulgadas', precio: 5000},
    {nombre: 'Laptop gamer', precio: 25000},
    {nombre: 'Smartphone', precio: 5000},
    {nombre: 'Pistola de aire', precio: 400},
    {nombre: 'Compresor', precio: 800},
    {nombre: 'Memoria USB 1TB', precio: 1500},
    {nombre: 'Tablet', precio: 11500}
];

meses.forEach( mes => {
    if(mes=='Abr'){
        console.log('Abril si existe')
    }
});

// let total = 0;
let resultado;
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);
// resultado = carrito.forEach( producto => total+=producto.precio);
// console.log(resultado);
resultado = carrito.some( producto => producto.nombre === 'Laptop gamer');
console.log(resultado);
resultado = carrito.filter( producto => producto.precio > 5000);
console.table(resultado);
resultado = carrito.filter( producto => producto.nombre !== 'Laptop gamer')
console.table(resultado);