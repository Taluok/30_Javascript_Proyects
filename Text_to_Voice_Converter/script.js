// nuevo objeto de tipo SpeechSynthesisUtterance, que se usa para sintetizar texto en voz.
let speech = new SpeechSynthesisUtterance();

// Inicializo un arreglo vacío para almacenar las voces disponibles.
let voices = [];

//un elemento <select> para que el usuario pueda elegir una voz.
let voiceSelect = document.createElement('select');

// Agrego el elemento <select> al DOM 
document.body.appendChild(voiceSelect);

// Evento que se dispara cuando las voces disponibles son cargadas por el navegador.
window.speechSynthesis.onvoiceschanged = () => {
    // Obtenemos las voces disponibles del navegador.
    voices = window.speechSynthesis.getVoices();
    
    // Asignamos una voz predeterminada (la primera de la lista) al objeto SpeechSynthesisUtterance.
    if (voices.length > 0) {
        speech.voice = voices[0];
    }

    // Llenamos el <select> con las voces disponibles.
    voices.forEach((voice, i) => {
        // Creamos una nueva opción en el <select> con el nombre de la voz y su índice.
        let option = new Option(voice.name, i);
        voiceSelect.add(option);
    });
};

// Agregamos un evento de cambio al <select> para actualizar la voz seleccionada.
voiceSelect.addEventListener('change', () => {
    // Cambiamos la voz de `speech` a la seleccionada en el <select>, utilizando el índice.
    speech.voice = voices[voiceSelect.value];
});

// Agregamos un evento al botón para que reproduzca el texto ingresado en el textarea.
document.querySelector("button").addEventListener("click", () => {
    // Obtenemos el texto del textarea y lo asignamos a la propiedad `text` del objeto `speech`.
    speech.text = document.querySelector("textarea").value;

    // Reproducimos el texto en voz mediante el método `speak`.
    window.speechSynthesis.speak(speech);
});
