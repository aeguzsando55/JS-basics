//* "use strict" // Esto indica que sigamos "buenas prácticas" corriendo JS en modo estricto
//* Objetos: Object methods
const persona = {
    nombre: 'Eric',
    email: 'erc@gmail.com',
    telefono: 2345678,
    domicilio: 'Leon, Mex.'
}
//* Anteriormente se observo que es muy facil modificar los objetos, añadiendo nuevos atributos
persona.pais = 'Mexico'; 
console.log(persona);
//* En ocasones, esto puede ser contraproducente. Para evitar que el objeto se modifique, se utiliza
//* el siguente metodo:
Object.freeze(persona);
//* De esta forma, sera mposible modificar el objeto
persona.estadoCivil = 'soltero';
delete persona.email;
console.log(persona)
console.log(Object.isFrozen(persona))

const persona2 = {
    nombre: 'Alberto',
    email: 'alberto@gmail.com',
    telefono: 2345655578,
    domicilio: 'Guanajuato, Mex.'
}
console.log(persona2)
//* El metodo seal, permite modificar las propiedades existentes, pero no agregar o eliminar.
Object.seal(persona2)
persona2.domicilio = "Nunca jamas, no. 10^78"
console.log(persona2)
