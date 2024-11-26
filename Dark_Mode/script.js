// Seleccionamos el ícono y configuramos el estado del tema
const themeToggle = document.getElementById('theme-toggle');
let isDarkMode = false; // Estado inicial del tema

// Función para alternar entre los temas
themeToggle.addEventListener('click', () => {
    if (isDarkMode) {
        // Volver al modo claro
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--header-footer-bg', '#f5f5f5');
        document.documentElement.style.setProperty('--button-bg', '#0078ff');
        document.documentElement.style.setProperty('--button-color', '#ffffff');
        document.documentElement.style.setProperty('--card-bg', '#f9f9f9');
        themeToggle.src = 'images/moon.png'; // Cambia al ícono de luna
        themeToggle.alt = 'Activar modo oscuro'; // Alterna texto alternativo
    } else {
        // Cambiar al modo oscuro
        document.documentElement.style.setProperty('--bg-color', '#121212');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--header-footer-bg', '#1e1e1e');
        document.documentElement.style.setProperty('--button-bg', '#ffffff');
        document.documentElement.style.setProperty('--button-color', '#121212');
        document.documentElement.style.setProperty('--card-bg', '#1e1e1e');
        themeToggle.src = 'images/sun.png'; // Cambia al ícono de sol
        themeToggle.alt = 'Activar modo claro'; // Alterna texto alternativo
    }
    isDarkMode = !isDarkMode; // Cambia el estado del modo
});

