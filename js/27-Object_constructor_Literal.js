//? Object constructor y literal
//* Prevamete habiamos defndó objetos de forma literal (object literal):
const cliente = {
    nombre: 'Eric',
    email: 'eric@kix.org',
    telefono: 8996610088
}

//* Con object contructor es diferente, pues con esto estamos creando una pseudoclase:
// Primero se nombra la clase y se define (Sempre se identifican con la primera letra en mayuscula)
function Cliente(nombre, email, telefono){
    this.nombre = nombre;
    this.email = email;
    this.telefono = telefono;
    // Podemos definir funciones dentro de la clase de la forma tradicional:
    this.infoCliente = function(){
        console.log(`${this.nombre} - ${this.email} - ${this.email}`);
    }
}
// Despues se hace una instanca del objeto
const cliente2 = new Cliente('Pedro', 'chchch@ert.com', 789000123);
const cliente3 = new Cliente('Clara', 'clarta@ert.com', 455812001);

console.log(cliente2);
cliente2.infoCliente();
console.log(cliente3);
cliente3.infoCliente();

// Defnamos un nuevo objeto:
function Producto(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
}

// En el codigo anterior se definió un metodo mediante la expresion de la funcion, que aunque es valido,
// en terminos de POO no lo es tanto. Por esta razon, la forma de definir metodos del objeto se hace 
// mediante el metodo prototype, que esta implicto en nuestro objeto:

Producto.prototype.infoProducto = function() {
    return `${this.nombre} - $${this.precio}`
}
// ES un poco extraño porque se esta defniendo fuera de la pseudoclase

const producto = new Producto('Cel PRO', 10000);
console.log(producto);
console.log(producto.infoProducto());

//* Esta forma de declarar clases es anteror al 2015. Sgue funconando, pero debdo a diversas criticas de desarroladores
//* programadores en otras plataformas, se implemento una forma estable y canonica mas orientada a POO. 