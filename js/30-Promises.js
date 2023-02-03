//? Promesas

const usuarioAutentcado = new Promise( (resolve, reject) => {
    const auth = true;
    if ((auth)) {
        resolve('Usuario autenticado'); // El promise se cumple
    }else{
        reject('Usuario desconocido'); // El promise no se cumple
    }
})

console.log(usuarioAutentcado);

//* Existe tres valores en un promise:
//* - Pending: No seha cumplido ni rechazado
//* - Fullfiled: Se cumplio
//* - Rejected: Se rechazo

//* Las promises son muy comunes en JS, especialemente cuando se hace una interconexion con APIs

//* Una vez validado el promise se requiere un resolve, es decir, que se hara despues:

// usuarioAutentcado
//     .then( function(resultado){
//         console.log(resultado);
//     })
//     .catch(function(error){
//         console.log(error);
//     })

usuarioAutentcado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error))