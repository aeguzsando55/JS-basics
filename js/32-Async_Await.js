//? Async / Await

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log("Descargando clientes...");

        setTimeout( () =>{ 
            resolve('Los clientes fueron descargados')}, 5000);

    });
}

// setTimeout( function(){
//     console.log('set timeout...')
// }, 5000)

async function app(){
    console.log("app lista");
    try {
        const resultado = await descargarNuevosClientes();
        console.log(resultado);
    } catch (error) {
        console.log(error)
    }
}

app();

console.log('Este codigo no se bloquea');