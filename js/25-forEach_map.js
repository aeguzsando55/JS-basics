//? forEach y map

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

//* ForEach: utlizado unicamente en arreglos. es un metodo propio de un arreglo.

carrito.forEach(function() {
    console.log("producto por cada elemento");
})

carrito.forEach(function(producto) {
    console.log(producto);
})

console.log("Con arrow function: ")

carrito.forEach( producto => console.log(producto));

//* Map: Tiene la misma utilidad de mprmir como for Each, pero se utiliza comunemente 
//* para crear en nuevo arreglo con base en los elementos de un array existente:
console.log("Con el metodo map: ")
carrito.map( producto => console.log(producto));

// Por ejemplo en este codigo fltramos productos menores a 5000
// y los almacenamos enn nuevo arreglo:
const arreglo1 = carrito.map( function(producto){ 
    if (producto.precio < 5000){
        return producto;
    }
});
// El resultado no es muy eficente pues devuelve los elelentos filtrados como indefnidos.
// Por ello es mas utilel metodo filter, propio de los arrays.
console.log(arreglo1);

// Es posible tambien crear arreglos con formato a partir de la información del objeto
// con un template string:
const arreglo2 = carrito.map(producto => `${producto.nombre} - $${producto.precio}`);

console.log(arreglo2);