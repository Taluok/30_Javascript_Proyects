// Seleccionamos el contenedor de notas y el botón de crear
const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector("button");

// Función para mostrar las notas guardadas en el localStorage al cargar la página
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes(); // Mostrar notas almacenadas en el inicio

// Actualizar localStorage cuando hay un cambio
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Evento para el botón de crear una nueva nota
createBtn.addEventListener("click", () => {
    // Crear un nuevo elemento de nota
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.className = "delete-icon"; // Añadir clase para poder identificarla
    notesContainer.appendChild(inputBox).appendChild(img);

    // Actualizar localStorage al agregar la nota nueva
    updateStorage();
});

// Evento para eliminar notas y actualizar localStorage
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
});

// Evento para evitar el comportamiento de "Enter" en un párrafo editable
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

