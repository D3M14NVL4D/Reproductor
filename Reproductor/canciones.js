const canciones = [
    { title: 'Like a Stone', artist: 'AudioSlave', source: 'canciones/likeastone.mp3', album: 'miniaturas/AudioSlave.jpeg' },
    { title: 'Rude', artist: 'MAGIC!', source: 'canciones/Rude.mp3', album: 'miniaturas/Rude.jpeg' },
    { title: 'Courtesy Call', artist: 'Thousand Foot Krutch', source: 'canciones/Courtesy Call.mp3', album: 'miniaturas/Courtesy Call.jpeg' },
];

// Función para cargar y mostrar las canciones
function cargarCanciones() {
    const listaCanciones = document.getElementById('lista-canciones');

    canciones.forEach((cancion) => {
        const li = document.createElement('li');
        const imagen = document.createElement('img');
        const h2 = document.createElement('h2');

        // Utiliza las propiedades correctas de la canción
        imagen.src = cancion.album;
        imagen.alt = `Portada de ${cancion.title}`;
        h2.textContent = cancion.title;

        li.appendChild(imagen);
        li.appendChild(h2);
        listaCanciones.appendChild(li);
    });
}

// Cargar las canciones cuando la página esté lista
window.addEventListener('DOMContentLoaded', cargarCanciones);

