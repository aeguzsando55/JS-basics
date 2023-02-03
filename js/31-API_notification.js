//? API 

const boton = document.querySelector('#boton');
boton.addEventListener('click', function(){
    console.log("Click!!")
    Notification.requestPermission()
        .then(resultado=>console.log("El resultado es ", resultado))
});

if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/granted.png',
        body: 'This is an example'
    })
}