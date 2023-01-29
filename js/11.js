//* Objetos: Destructuring
const persona = {
    nombre: 'Eric',
    email: 'erc@gmail.com',
    telefono: 2345678,
    domicilio: 'Leon, Mex.'
}
//* Anteriormente se accedia al objeto y extraiamos el valor de una propiedad dentro de otra variable
// const email = persona.email;
// console.log(email)

//* Con destructuring accedemos a la propiedad sin la necesidad de utilizar la notacion de punto
//* solo es necesario que se sepa el nombre de la propiedad y al declarar una varable, encerrar este nombre
//* entre llaves.
const {nombre} = persona;
const {telefono} = persona;
console.log(nombre, telefono);

//* Se puede simplificar la asigancion de esta forma:
const {email, domicilio} = persona;
console.log(email);
console.log(domicilio);

//* Si no se nombra la variable con el nombre de una propiedad no produce un error, pero el resultado 
//* es 'undifined'
const {nombre_persona} = persona;