//By Demian Fontanot

const audio = document.getElementById('audio');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');
const albumCover = document.getElementById('album-cover');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const playPauseButton = document.getElementById('play-pause-button');
const repeatButton = document.getElementById('repeat');
const randomButton = document.getElementById('random');


let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseButton.innerHTML = '<i class="bi bi-play"></i>'; // Cambia el ícono a "play"
    } else {
        audio.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause"></i>'; // Cambia el ícono a "pause"
    }
    isPlaying = !isPlaying; // Cambia el estado de reproducción
}

playPauseButton.addEventListener('click', togglePlayPause);
prevButton.addEventListener('click', playPrevSong);
nextButton.addEventListener('click', playNextSong);

function restartSong() {
    audio.currentTime = 0; // Reinicia la canción al principio
    if (!isPlaying) {
        togglePlayPause(); // Si estaba en pausa, inicia la reproducción
    }
}

const songs = [
    { title: 'Like a Stone', artist: 'AudioSlave', source: 'canciones/likeastone.mp3', album: 'miniaturas/AudioSlave.jpeg' },
    { title: 'Rude', artist: 'MAGIC!', source: 'canciones/Rude.mp3', album: 'miniaturas/Rude.jpeg' },
    { title: 'Courtesy Call', artist: 'Thousand Foot Krutch', source: 'canciones/Courtesy Call.mp3', album: 'miniaturas/Courtesy Call.jpeg' },
  
    
];

let currentSongIndex = 0;

function loadSong(songIndex) {
    const song = songs[songIndex];
    audio.src = song.source;
    songTitle.textContent = song.title;
    artist.textContent = song.artist;
    albumCover.src = song.album;
}

function playNextSong() {
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    if (nextSongIndex !== currentSongIndex) {
        currentSongIndex = nextSongIndex;
        loadSong(currentSongIndex);
        audio.play();
    }
}

function playPrevSong() {
    const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    if (prevSongIndex !== currentSongIndex) {
        currentSongIndex = prevSongIndex;
        loadSong(currentSongIndex);
        audio.play();
    }
}

function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length); // Genera un índice aleatorio
    const randomSong = songs[randomIndex];
    
    audio.src = randomSong.source; // Establece la fuente de audio
    audio.play(); // Reproduce la canción
    playPauseButton.innerHTML = '<i class="bi bi-pause"></i>'; // Cambia el ícono a "pause"
    isPlaying = true; // Cambia el estado de reproducción a "reproducir"
    
    // Actualiza el título y la miniatura con la información de la canción seleccionada aleatoriamente
    songTitle.textContent = randomSong.title;
    artist.textContent = randomSong.artist;
    albumCover.src = randomSong.album;
}

audio.addEventListener('ended', playNextSong);

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNextSong);
prevButton.addEventListener('click', playPrevSong);
repeatButton.addEventListener('click', restartSong);
randomButton.addEventListener('click', playRandomSong);


loadSong(currentSongIndex);


