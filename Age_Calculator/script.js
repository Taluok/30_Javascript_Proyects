let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

// Seleccionamos el botón por su id y añadimos el evento de clic para calcular la edad
document.getElementById("calculate-btn").addEventListener("click", calculateAge);

function calculateAge() {
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1; // Corrección de "todat" a "today"
    let y2 = today.getFullYear();

    let d3, m3, y3;

    // Calculamos los años
    y3 = y2 - y1;

    // Calculamos los meses
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--; // Ajustamos el año si el mes actual es menor que el de nacimiento
        m3 = 12 + m2 - m1;
    }

    // Calculamos los días
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--; // Ajustamos el mes si el día actual es menor que el de nacimiento
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // Ajustamos los meses si fueron negativos después de los cálculos
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old.`;
}

// Función para obtener la cantidad de días en un mes específico
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

