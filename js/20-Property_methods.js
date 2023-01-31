//? Métodos de propiedad
// Las clases pueden tambien ser propiedades de un objeto:
const reproductor = {
    reproducir: function(id=0){
        console.log(`Reproduciendo canción ${id}`)
    },

    pausar: function() {
        console.log("pausado...")
    },

    crearPlaylist: function(nombre) {
        console.log(`Playlist "${nombre}" creada`)
    },

    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist "${nombre}"`)
    }
}
// Tambien se pueden agregar las propuedas por fuera
reproductor.borrarCancion = function(id){
    console.log(`Canción ${id} borrada`)
};

reproductor.borrarPlaylist = function(nombre){
    console.log(`Playlist "${nombre}" borrada`)
};

// Las funciones son ahora llamadas referenciando el objeto con la notación punto
reproductor.reproducir(200);
reproductor.pausar();
reproductor.crearPlaylist("cumbias");
reproductor.reproducirPlaylist("cumbias");
reproductor.borrarCancion(200);
reproductor.borrarPlaylist("cumbias");