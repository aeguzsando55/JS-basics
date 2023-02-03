//? Loops (ciclos)

console.log(1);
console.log(2);
console.log(3);
console.log(4);

//* For loop

for(let i = 0; i < 4; i++) {
    console.log(i+1);
}

for (let i = 1; i <= 100; i++) {
    if(i%2 == 0){
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}

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

for(let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
}


//* While loop
i = 1;
while (i <= 10) {
    if(i%2 == 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
    i++;
}

i = 0;
while (i < carrito.length) {
    console.log(carrito[i])
    i++;
}

//* Do while loop
i = 0; 
do {
    console.log(i+1)
    i++;
} while (i < 10) // En un do while la condicion se ejecuta al menos una vez.

i = 100; // Por lo que si el iterador inicia con n numero mayor a la condición
do {
    console.log(i+1) // El codigo se ejecutara una sola vez 
    i++;
} while (i < 10) // Pues la condición se evalua al final