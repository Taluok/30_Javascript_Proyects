const api_url = "https://api.quotable.io/random";
const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getquote(url) {

    const response = await fetch(url);
    const data = await response.json();

    // Asigna el contenido de la cita y el autor correctamente
    quote.innerHTML = data.content;  // La cita
    author.innerHTML = data.author;   // El autor

}
// Llama a la función para obtener una cita al cargar la página
getquote(api_url);
