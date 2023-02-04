//? Fetch API


//* Forma larga con promises
function obtenerEmpleados(){
    const archivo = 'empleados.json'
    fetch(archivo) // Fetch funcona bajo una 'promise'
        .then( resultado => { // Al hacer fetch al archvo, entonces obtenemos un resultado
            console.log(resultado); // Primero imprimimos el estado del promise (Response)
            return resultado.json(); // Luego retornamos los datos del archivo.json
        }) // Se requere un segundo then en el cual podremos imprimr los datos que se retornaron anteriormente
        .then( datos => {
            console.log(datos);
            console.log(datos.empleados);
            const { empleados} = datos;
            console.log(empleados);    

            empleados.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);
            });

        });
}

obtenerEmpleados();

//* Forma corta con async/await
async function obtenerEmpleados2(){
    const archivo = 'empleados.json'
    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados2();