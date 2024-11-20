let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadeddata = function() {
    // Establece el valor máximo de la barra de progreso
    progress.max = song.duration;
    // Establece el valor inicial de la barra de progreso
    progress.value = song.currentTime;
}

// Función de play/pause
function playPause() {
    if (song.paused) {
        // Reproducir canción
        song.play();
        // Cambiar el ícono a pausa
        ctrlIcon.classList.remove("play-filled");
        ctrlIcon.classList.add("pause");
    } else {
        // Pausar canción
        song.pause();
        // Cambiar el ícono a play
        ctrlIcon.classList.remove("pause");
        ctrlIcon.classList.add("play-filled");
    }
}

// Actualizar la barra de progreso mientras se reproduce la canción
setInterval(() => {
    if (!song.paused) {
        progress.value = song.currentTime; // Actualiza la barra de progreso
    }
}, 500);

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("pause");
    ctrlIcon.classList.remove("play-filled")
}
