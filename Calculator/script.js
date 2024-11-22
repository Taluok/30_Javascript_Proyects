// Función para añadir valores al display
function appendValue(value) {
    const display = document.getElementById("display");
    display.value += value;
}

// Función para limpiar el display
function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

// Función para borrar el último carácter
function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

// Función para calcular la expresión
function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Evalúa la expresión matemática
    } catch (error) {
        display.value = "Error"; // Maneja errores en la evaluación
    }
}