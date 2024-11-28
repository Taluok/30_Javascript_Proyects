let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

// Control del desplazamiento con la rueda del ratón
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

// Botón "Anterior"
backBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 900; // Ajusta este valor al ancho de tus imágenes
});

// Botón "Siguiente"
nextBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 900; // Ajusta este valor al ancho de tus imágenes
});
