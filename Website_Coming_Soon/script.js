// Establecemos la fecha objetivo para el contador regresivo
let countDownDate = new Date("2024-10-16T00:00:00").getTime();
// Convertimos la fecha en un valor de tiempo en milisegundos

// Configuramos un intervalo que se ejecutará cada segundo
let x = setInterval(function () {
    // Obtenemos la fecha y hora actual en milisegundos
    let now = new Date().getTime();

    // Calculamos la distancia entre la fecha actual y la fecha objetivo
    let distance = countDownDate - now;

    // Calculamos los días restantes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));

    // Calculamos las horas restantes, eliminando el tiempo correspondiente a los días
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Calculamos los minutos restantes, eliminando el tiempo correspondiente a las horas
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    // Calculamos los segundos restantes, eliminando el tiempo correspondiente a los minutos
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Verificamos si la cuenta regresiva ha terminado
    if (distance < 0) {
        clearInterval(x); // Detenemos el intervalo
        document.getElementById("days").innerHTML = "00"
        document.getElementById("hours").innerHTML = "00"
        document.getElementById("minutes").innerHTML = "00"
        document.getElementById("seconds").innerHTML = "00"
    }
}, 1000); // El intervalo se ejecuta cada 1000 ms (1 segundo)


