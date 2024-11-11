const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Función para agregar una nueva tarea
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        
        // Añade evento de clic para eliminar la tarea
        li.addEventListener("click", function() {
            this.remove();
            saveTasks(); // Guarda cambios en localStorage
        });
        
        listContainer.appendChild(li);
        saveTasks(); // Guarda la lista actualizada en localStorage
    }
    inputBox.value = ""; // Limpia el campo de entrada
}

// Función para guardar tareas en localStorage
function saveTasks() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Función para mostrar tareas guardadas en localStorage al cargar la página
function showTasks() {
    listContainer.innerHTML = localStorage.getItem("tasks") || "";
    
    // Vuelve a agregar el evento de clic a cada tarea
    const tasks = listContainer.querySelectorAll("li");
    tasks.forEach(task => {
        task.addEventListener("click", function() {
            this.remove();
            saveTasks();
        });
    });
}

// Muestra las tareas guardadas al cargar la página
showTasks();
