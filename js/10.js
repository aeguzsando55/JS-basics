//* Objetos 
//* anteriormente declaramos datos de contacto:
// const nombre = "Eric";
// const email = 'erc@gmail.com';
// const telefono = 12345678;

//* En JS se hace indispensable el uso de objetos que permitan almacenar datos que requieran mas de un campo
// Se asemeja a un hashmap de python
const persona = {
    nombre: 'Eric',
    email: 'erc@gmail.com',
    telefono: 2345678
}
console.log(persona);

//* Para acceder a los atributos
console.log(persona.nombre);
console.log(persona.email);
console.log(persona.telefono);

//* Otra forma es (Similar a un hashmap en python): 
console.log(persona["nombre"]);
console.log(persona["email"]);
console.log(persona["telefono"]);

//* Reasignar valores de una propiedad del objeto
persona.nombre = "Eric Guzman";
console.log(persona);

//* Agregar nuevas propiedades al objeto:
persona.domicilo = "Chacuaco, no 22, Leon, Mex.";
console.log(persona);

//* Eliminar propiedades del objeto
delete persona.email;
console.log(persona);