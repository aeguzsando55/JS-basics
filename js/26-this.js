//? Palabra reservada this
//* This hace referencia al objeto sobre el cual se esta llamando a llamar en una función especifica.
//* En resumen, hace referencia al mismo objeto.
const reservación = {
    nombre: 'Eric',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de $${this.total}`);
    }
}

reservación.informacion();

//* con un arrow function es mas complejo, pues al imrpimir no hace referencia al objeto sino al objeto window
//* resultando en que se imprima undefined. Por ello se debe declarar el objeto window.propiedad antes de 
//* declarar nuestro objeto:

window.nombre = 'Un nombre';

const reservación2 = {
    nombre: 'Chayo',
    informacion: () => {
        console.log(this.nombre);
    }
}

reservación2.informacion();