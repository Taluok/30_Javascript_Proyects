let [seconds, minutes, hours] = [0, 0, 0]; // Corregí "hour" por "hours" para que coincida con su uso posterior.
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours; // Formatea horas a dos dígitos.
    let m = minutes < 10 ? "0" + minutes : minutes; // Formatea minutos a dos dígitos.
    let s = seconds < 10 ? "0" + seconds : seconds; // Formatea segundos a dos dígitos.

    displayTime.innerHTML = `${h}:${m}:${s}`; // Usa template strings para simplificar.
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer); // Si el temporizador ya está corriendo, lo reinicia.
    }
    timer = setInterval(stopwatch, 1000); // Corregí "setInternal" por "setInterval".
}

function watchStop() {
    clearInterval(timer); // Detiene el temporizador.
}

function watchReset() {
    clearInterval(timer); // Detiene el temporizador.
    [seconds, minutes, hours] = [0, 0, 0]; // Reinicia el tiempo.
    displayTime.innerHTML = "00:00:00"; // Restablece el texto del temporizador.
}
