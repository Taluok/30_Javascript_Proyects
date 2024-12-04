const selectField = document.getElementById("selectField");
const list = document.getElementById("list");
const arrow = selectField.querySelector("img"); // Icono de flecha

// Alternar el menú desplegable al hacer clic
selectField.addEventListener("click", () => {
    const isVisible = list.style.display === "block";
    list.style.display = isVisible ? "none" : "block";

    // Rotar la flecha dependiendo del estado
    arrow.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
});

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", (e) => {
    if (!selectField.contains(e.target) && !list.contains(e.target)) {
        list.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    }
});
