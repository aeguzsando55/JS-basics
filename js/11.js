//* Objetos: Destructuring
const persona = {
    nombre: 'Eric',
    email: 'erc@gmail.com',
    telefono: 2345678,
    domicilio: 'Leon, Mex.'
}
//* Ateriormente se accedia al objeto y extraiamos el valor de una propiedad dentro de otra variable
// const email = persona.email;
// console.log(email)

//* Con destructuring accedemos a la propiedad sin la necesidad de utilizar la notacion de punto
//* solo es necesario que se sepa el nombre del atributo y al declarar una varable, encerrar este nombre
//* entre llaves.
const {nombre} = persona;
const {telefono} = persona;
console.log(nombre, telefono);

//* Se puede simplificar la asigancion de esta forma:
const {email, domicilio} = persona;
console.log(email);
console.log(domicilio);

//* Si no se nombra la variable con el nombre de un atributo no produce un error, per el resultado 
//* es 'undifined'
const {nombre_persona} = persona;