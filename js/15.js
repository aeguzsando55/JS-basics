//* Arrays: más métodos

const meses = new Array('Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun');
const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Tarejeta grafica', precio: 5000},
    {nombre: 'Laptop gamer', precio: 25000},
    {nombre: 'Smartphone', precio: 5000},
    {nombre: 'Pistola de aire', precio: 400},
    {nombre: 'Compresor', precio: 800},
    {nombre: 'Memoria USB 1TB', precio: 1500},
    {nombre: 'Tablet', precio: 11500}
];
//* Para comprobar si un elemento existe o no en un arreglo existen dos forma equivalentes:
// for each
meses.forEach(function (mes) {
    if (mes == 'Mar') {
        console.log('Marzo si existe');}
});
// Includes
let resultado = meses.includes('Mar');
console.log(resultado);

//* En el caso de arrays con objeto se utliza el metodo Some:
resultado = carrito.some(function(producto){
    return producto.nombre === 'Laptop gamer'
});

console.log(resultado);

//* El metodo anteror se puede recortar con un arrow functon, que se aundara en el tema mas adelate:
resultado = carrito.some(producto => producto.nombre === 'cel gamer'); // retonnara false
console.log(resultado);

//* Si queremos sumar elemento, por ejemplo los precios de losproductos de carrito podramos hacer
//* lo siguiente:
let total = 0;
carrito.forEach(function(producto){
    total+=producto.precio 
});
console.log(total);
//* Auqnue el metodo reduce simplifica un poco esta operación:
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio 
}, 0);
console.log(resultado);
//* con arrow function
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

//* La funcion filter es muy versatil:
// Por ejemplo, puede usarse para que retorne solo los productos mayores, menores o iguales a cierta cantidad
resultado = carrito.filter(function(producto){
    return producto.precio > 5000
});
console.log(resultado);
resultado = carrito.filter(producto => producto.precio > 5000);
console.log(resultado);
// Tambien si son iguales a determnado string:
resultado = carrito.filter(function(producto){
    return producto.nombre === 'Laptop gamer'
});
console.log(resultado);