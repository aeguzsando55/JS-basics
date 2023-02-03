//? Clases en JS

//* Previamente usabamos functon para delarar una clase. Ahora se puede usar la plabra reservada
//* class. La sintaxis es la siguiente:
// Nota que despues del identificador no hay parentesis para parametros, pero s hay una clase costructora
// que se declara con la palabra reservada constructor:
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    infoProducto() {
        return `${this.nombre} -  $${this.precio}`;
    }

    infoPrecio() {
        return `$${this.precio}`;
    }
}

//* Esto esta mas apegado a las reglas de POO, aunque el comportamento es practicamente el mismo
//* que las clases anteriores.

const producto1 = new Producto('Coca Cola', '21');
console.log(producto1);
console.log(producto1.infoProducto());

const producto2 = new Producto('Capuchino', '40');
console.log(producto2);
console.log(producto2.infoProducto());

//* Herencia: supongamos que tenemos una clase nueva que tiene varios propiedad de la clase anterior
//* mas otra propiedad, esto se declara de la siguente forma:

// class Libro {
//     constructor(nombre, precio, isbn) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.isbn = isbn;
//     }
// }

//* Declarar de esta forma podria ser redundante si observamos que se repiten varias propiedades y sabiendo que
//* la clase Producto es mas general. De esta forma podemos tomas Producto como una clase padre que herede
//* a la clase Libro el consteuctory demas metodos. Esto se especifica con la palabra reservada extends
//* despues del identificador de la clase, segudio del identificador de la clase padre.

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio); //Con la funcion super referenciamos el metodo padre, en este caso el constructor.
        this.isbn = isbn 
    }

    infoProducto() { // Retornamos con super la funcion de impresion de padre y concatenamos con la  otra propiedad.
        return `${super.infoProducto()} - ISBN:${this.isbn}`;
    }
}

// Instancamos un objeto de la clase Lbro, nota los tres parametros de entrada:
const libro1 = new Libro('Revolucion', 120, '9012eg5411');
console.log(libro1.infoProducto());

