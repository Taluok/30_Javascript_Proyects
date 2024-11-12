// Seleccionamos el elemento de entrada de texto donde se mostrará la contraseña generada
const passwordBox = document.getElementById("password");

// Definimos la longitud deseada para la contraseña
const lenght = 12;

// Definimos cadenas con tipos de caracteres específicos
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Letras mayúsculas
const lowerCase = "abcdefghijklmnopqrstuvwxyz"; // Letras minúsculas
const number = "0123456789";                    // Números
const symbol = "@#$%&![]{}<>/+*-";              // Símbolos

// Combinamos todas las cadenas en una sola para tener una lista completa de caracteres posibles
const allChars = upperCase + lowerCase + number + symbol;

// Función que genera una contraseña aleatoria
function createPassword() {
    // Empezamos con una contraseña vacía
    let password = "";
    
    // Añadimos un carácter aleatorio de cada tipo para asegurar que la contraseña contenga todos los tipos
    password += upperCase[Math.floor(Math.random() * upperCase.length)]; // Una letra mayúscula aleatoria
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]; // Una letra minúscula aleatoria
    password += number[Math.floor(Math.random() * number.length)];       // Un número aleatorio
    password += symbol[Math.floor(Math.random() * symbol.length)];       // Un símbolo aleatorio

    // Bucle que continúa añadiendo caracteres aleatorios hasta que la contraseña alcance la longitud deseada
    while (lenght > password.length) {
        // Agrega un carácter aleatorio de la lista completa `allChars`
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Asignamos la contraseña generada al campo de entrada para que se muestre al usuario
    passwordBox.value = password;
}

// Función para copiar la contraseña generada al portapapeles
function copyPassword() {
    // Seleccionamos el texto dentro del campo de entrada `passwordBox`
    passwordBox.select();
    
    // Ejecutamos el comando de copiar para copiar el texto seleccionado al portapapeles
    document.execCommand("copy");
}

