// Obtener los elementos necesarios
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

// Función para generar el código QR
function generateQR() {
    let inputText = qrText.value.trim(); // Eliminar espacios extra
    if (inputText) {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputText)}`;
        qrImage.alt = "Generated QR Code";
    } else {
        alert("Please enter a valid text or URL to generate the QR Code.");
    }
}
