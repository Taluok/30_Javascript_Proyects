// Obtener los elementos necesarios
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Función para generar el código QR
function generateQR() {
    let inputText = qrText.value.trim(); // Eliminar espacios extra

    // Validar si el texto no está vacío
    if (inputText.length > 0) {
        // Generar el código QR
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(inputText);
        qrImage.alt = "Generated QR Code";
        imgBox.classList.add("show-img");
    } else {
        // Mostrar error si el campo está vacío
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error'); // Eliminar el estado de error después de 1 segundo
        }, 1000);
    }
}

