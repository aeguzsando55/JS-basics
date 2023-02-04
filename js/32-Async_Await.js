//? Async / Await

function descargarNuevosClientes(){
    return new Promise(resolve =>{
        console.log("Descargando clientes...");
        setTimeout( () => { 
            resolve('Los clientes fueron descargados')}, 10000);
    });
}

function descargarUltimosPedidos(){
    return new Promise(resolve =>{
        console.log("Descargando pedidos...");
        setTimeout( () => { 
            resolve('Los pedidos fueron descargados')}, 5000);
    });
}

//! IMPORTANTE: Como puedo realizar dos tareas de forma asincrona para mejorar performance:

// setTimeout( function(){
//     console.log('set timeout...')
// }, 5000)

// async function app(){
//     console.log("app lista");
//     try {
//         const clientes = await descargarNuevosClientes();
//         const pedidos = await descargarUltimosPedidos();
//         console.log(clientes);
//         console.log(pedidos);
//     } catch (error) {
//         console.log(error)
//     }
// }


async function app(){
    console.log("app lista");
    try {
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()])
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch (error) {
        console.log(error)
    }
}


app();

console.log('Este código no se bloquea');