//* Objectos: unir objetos con spread operators

const persona = {
    nombre: 'Eric',
    email: 'erc@gmail.com',
    telefono: 2345678,
    
}

const domicilio = {
    calle: 'Nunca jamas, no 1*10^1000',
    ciudad: 'La comarca',
    estado: 'Tierra media',
    pais: 'Oz'
}

//* Es recomendable no realizar modificaciones a objetos de forma directa. En su lugar, una buena practica 
//* actualmente es el uso del rest operator:
const nuevaPersona = { ...persona, ...domicilio };
//* Este une las propiedades de ambos objetos en uno nuevo. 
console.log(persona);
console.log(domicilio);
console.log(nuevaPersona);