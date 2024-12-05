const circle = document.querySelector("circle");
const number = document.getElementById("number");

const progressValue = 65; // Cambia este valor para ajustar el progreso (0-100)

// Calcula la posición inicial del círculo según el porcentaje
const circlePerimeter = 2 * Math.PI * 70; // 2πr donde r=70
const dashOffset = circlePerimeter - (progressValue / 100) * circlePerimeter;

// Actualiza la barra de progreso y el porcentaje visual
circle.style.strokeDashoffset = dashOffset;
let currentValue = 0;

// Animación del número
const interval = setInterval(() => {
    if (currentValue >= progressValue) {
        clearInterval(interval);
    } else {
        currentValue++;
        number.textContent = `${currentValue}%`;
    }
}, 15); // Incrementa el valor cada 15ms
